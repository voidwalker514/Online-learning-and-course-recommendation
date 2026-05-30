# 🎓 EdTech: Online Learning & Course Recommendation Platform

## 📌 Project Overview
A Full-Stack MERN application designed for online learning. It allows users to browse courses, enroll, track their progress, and receive personalized course recommendations based on their interests and skills.

## ✨ Features
- **User Authentication:** Secure login/register with JWT.
- **Personalized Recommendations:** Algorithm suggests courses based on user interests.
- **Course Enrollment:** Users can seamlessly enroll in new courses.
- **Progress Tracking:** Visual progress bars for active courses.
- **Responsive UI:** Modern, clean design using Tailwind CSS.

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JSON Web Tokens (JWT), bcrypt

## 🏃‍♂️ How to Run

### 1. Backend
```bash
cd server
npm install
# Ensure MongoDB is running locally or provide a URI in server/.env
npm run seed # (Optional: seeds mock courses)
npm start # or node server.js
```

### 2. Frontend
```bash
cd client
npm install
npm run dev
```

For a comprehensive guide on architecture, implementation, and interview preparation, please see `Project_Playbook.md` in this directory.
