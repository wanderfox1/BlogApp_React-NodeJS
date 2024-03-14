import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import { registerValidation } from './validations/auth.js';

import UserModel from './models/User.js';

mongoose
// именно к blog !
    .connect('mongodb+srv://Coraline:acWsQOZ8UWp4LlMs@cluster0.bmnm7ne.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB is ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', async (req, res) => {
    try{
        const user = await UserModel.findOne({ email : req.body.email });

        if (!user) {
            return res.status(404).json({
                message : 'Пользователь не найден :(' // без уточнений для безопасности
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        // сравнение тела запроса и то, что есть в базе

        if (!isValidPass){
            return res.status(400).json({
                message : 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,

            }, 
            'secret321',
            {
                expiresIn : '30d',
            },
        );

        const {passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        });
    } catch {
        console.log(err);
        res.status(500).json({
            message : "Не удалось авторизоваться :(",
        });
    }
});





// app.get('/', (req, res) => { 
//     res.send('Hello Angelina, check2!');
// });

app.post('/auth/register', registerValidation, async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
    
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10); // salt - алгоритм шифрования
        const hash = await bcrypt.hash(password, salt); // многие компании использую 
    
        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash : hash,// фронтенд передаст пароль в открытую, но далее бэкенд шифрует
        });
    
        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,

            }, 
            'secret321',
            {
                expiresIn : '30d',
            },
        );

    const {passwordHash, ...userData } = user._doc;


    res.json({
        ...userData,
        token,
    });

    } catch(err){
        console.log(err);
        res.status(500).json({
            message : "Не удалось зарегистрироваться",
        });
    }
});

// app.post('auth/login', (req, res) => {
//     console.log(req.body);


//     if (req.body.req === "test@test.ru") {
//         const token = jwt.sign({
//             email : req.body.email,
//             fullName : 'Coraline Johns',
//         }, 
//         'secret321',
//         );
//     };
//     res.json({
//         success : true, 
//         token,

//     });

// });

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server is OK');
});