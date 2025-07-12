# 📋 Project Management Tool

A full-stack collaborative *Project Management Tool* like Trello or Asana, built using *React, **Node.js, **Express, **MongoDB Atlas, and **Socket.IO*.

✅ Completed as part of *CodeAlpha Internship Task 3*.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- 🗂 Create and manage Projects
- ✅ Add Tasks to Projects
- 💬 Comment on Tasks
- 🔄 Real-time updates using *Socket.IO*
- ☁ MongoDB Atlas Integration

---

## 🧑‍💻 Technologies Used

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React.js, Axios, Tailwind CSS |
| Backend     | Node.js, Express.js    |
| Database    | MongoDB Atlas          |
| Auth        | JWT, bcrypt            |
| Real-time   | Socket.IO              |
| Deployment  | Netlify (frontend), Render (backend)

---

## 📁 Folder Structure

project-management-tool/ ├── client/         # React frontend │   ├── src/ │   ├── public/ │   └── package.json ├── server/         # Express backend │   ├── routes/ │   ├── models/ │   ├── server.js │   └── package.json ├── .env.example    # Sample env file ├── .gitignore      # Ignore node_modules, .env ├── README.md       # You're here!

---

## 🛠 How to Run Locally

### 1️⃣ Backend (Server)

```bash
cd server
npm install
node server.js

Make sure you create a .env file inside server/ with:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


---

2️⃣ Frontend (React Client)

cd client
npm install
npm start

The app will run at: http://localhost:3000

---


👩‍💻 Developed By

Usharani Challa
Intern at CodeAlpha
📧 Email: challausharani2006@gmail.com
🌐 GitHub: https://github.com/usharani16challa


---

✅ Status: 100% Complete

✔ All internship task features implemented.
✔ Frontend + Backend integrated.
✔ Real-time updates working.


---

📌 Note

Please run npm install inside both client/ and server/ folders after cloning this repo.
Don't forget to add your own .env file using the format provided in .env.example.

---
