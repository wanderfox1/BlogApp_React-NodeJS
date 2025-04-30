```markdown
# 📝 Blog API & Frontend App

This project is a **full-stack blog application** built with **React**, **Express**, **MongoDB**, and **Prisma ORM**.
Includes a variety of useful features such as authentication, form validation, file uploads, and CRUD operations.

## 📌 Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB with Prisma ORM
- **Authentication:** JWT
- **Validation:** express-validator
- **File Uploads:** multer

---

## 🚀 Features

- User authentication (JWT)
- Input validation using `express-validator`
- Encrypted passwords using `bcrypt`
- Blog post CRUD (Create, Read, Update, Delete)
- File upload support with `multer`
- Clean API structure with Prisma and MongoDB

---

## 🧱 Project Structure

```bash
.
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── prisma
│   └── server.js
└── frontend
    ├── public
    └── src
        ├── components
        ├── pages
        ├── services
        └── App.jsx
```

---

## ⚙️ Installation

1. **Clone the repo**
```bash
git clone https://github.com/wanderfox1/BlogApp_React-NodeJS
cd blog-app
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Set up environment variables**

Create a `.env` file in `/backend`:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

4. **Start the backend**
```bash
npm run dev
```

5. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

6. **Start the frontend**
```bash
npm start
```

---

## 📚 Tech Used (Dependencies)

```json
"dependencies": {
  "bcrypt": "^5.1.1",
  "express": "^4.18.3",
  "express-validator": "^7.0.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.2.1",
  "multer": "^1.4.5-lts.1",
  "nodemon": "^3.1.0"
}
```

---

## 🛠 Future Plans

- Refactor API structure for reusability in To-Do List App
- Add user roles (admin, editor, viewer)
- Improve error handling
- Implement unit/integration tests
- Convert parts of backend to TypeScript

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 💬 Contact

If you have any questions or suggestions, feel free to reach out via GitHub Issues or Discussions.
