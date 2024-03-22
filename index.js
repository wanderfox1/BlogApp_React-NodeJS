import express from 'express';

import mongoose from 'mongoose';

import { loginValidation, postCreateValidation, registerValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose
// именно к blog !
    .connect('mongodb+srv://Coraline:acWsQOZ8UWp4LlMs@cluster0.bmnm7ne.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB is ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/posts', PostController.getAll);
// app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
// app.delete('/posts', PostController.remove);
// app.patch('/posts', PostController.update);

// app.get('/posts/create', checkAuth, PostController.getMe);
// app.get('/posts/create', checkAuth, PostController.getMe);
// app.get('/posts/create', checkAuth, PostController.getMe);
// app.get('/posts/create', checkAuth, PostController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server is OK');
});