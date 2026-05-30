# Online Learning & Course Recommendation Platform

## 1️⃣ PROJECT EXPLANATION

### Simple Explanation
Imagine a "Netflix for Education." Users can sign up, explore a variety of courses (like Web Development, Data Science, AI), and get personalized recommendations based on their skills and interests. Once they find a course they like, they can enroll in it and track their progress as they complete it.

### Technical Explanation
The platform is a Full Stack MERN application (MongoDB, Express, React, Node.js). It uses a RESTful API architecture. 
- **Authentication:** JWT-based secure authentication for learners.
- **Content Delivery:** The backend serves course details stored in a NoSQL database (MongoDB).
- **Recommendation Engine:** A rule-based content-filtering algorithm that matches course tags and categories with the user's selected interests and skills. 
- **State Management:** React state and context handle user sessions, while the backend maintains enrollment states and progress percentages.

### Why it's useful
- **Students/Learners:** Discover relevant skills and track learning visually.
- **EdTech Companies:** Demonstrates how personalization keeps users engaged.
- **You (The Developer):** Proves you can handle databases, APIs, authentication, complex UI state, and basic algorithmic logic (recommendation).

### Workflow
User Registration → Profile Creation (Interests/Skills) → Course Browsing → Recommendation Engine suggests matching courses → Enrollment → Progress Tracking → Learner Dashboard.

---

## 2️⃣ TECH STACK OPTIONS

### Option A: Easy
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** Node.js, Express
- **Database:** Local JSON files
- **Auth:** Sessions

### Option B: Intermediate (🔥 Recommended & Selected)
- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, REST APIs
- **Database:** MongoDB, Mongoose
- **Auth:** JWT (JSON Web Tokens), bcrypt for password hashing
- **Recommendation:** Skill-tag matching algorithm

### Option C: Advanced
- **Frontend:** Next.js (App Router), TypeScript, Redux Toolkit
- **Backend:** Microservices (Node + Python for ML), GraphQL
- **Database:** PostgreSQL + Redis for caching
- **Recommendation:** Machine Learning Collaborative Filtering (Python/FastAPI)

**Selection:** Option B is the best for a Full Stack / MERN Developer portfolio. It showcases all the industry-standard technologies expected in entry-level and mid-level roles without being overwhelmingly complex.

---

## 3️⃣ PROJECT ARCHITECTURE

### Architecture Diagram (Text-Based)
```mermaid
graph TD
    Client[React Frontend] -->|REST API (JSON)| Gateway[Express Backend Server]
    Gateway --> Auth[Authentication Service]
    Gateway --> Course[Course Management]
    Gateway --> Recs[Recommendation Logic]
    Gateway --> Prog[Progress Tracking]
    
    Auth --> DB[(MongoDB)]
    Course --> DB
    Recs --> DB
    Prog --> DB
```

### API Flow
1. `POST /api/auth/register` - Creates user & hashes password.
2. `POST /api/auth/login` - Verifies password & returns JWT.
3. `GET /api/courses` - Fetches all courses.
4. `GET /api/courses/recommendations` - Computes and returns courses matching user interests.
5. `POST /api/enrollments` - Creates a new enrollment record.
6. `PUT /api/enrollments/:id/progress` - Updates progress percentage.

### Database Flow (Collections)
- **Users:** `_id`, `name`, `email`, `password`, `interests` (array), `skills` (array)
- **Courses:** `_id`, `title`, `description`, `instructor`, `category`, `tags` (array), `level`
- **Enrollments:** `_id`, `user_id`, `course_id`, `progress` (0-100), `enrolledAt`

---

## 4️⃣ IMPLEMENTATION PLAN

- **Phase 1: Setup:** Initialize Git, Vite for React, and npm for Express. 
- **Phase 2: Frontend Creation:** Setup React Router, Tailwind CSS, basic layout (Navbar, Footer).
- **Phase 3: Backend Setup:** Express server setup, CORS, error handling middleware.
- **Phase 4: MongoDB Connection:** Setup Mongoose schemas and connect to MongoDB Atlas / Local.
- **Phase 5: Authentication:** Build user models, bcrypt hashing, JWT generation, and React context for auth.
- **Phase 6: Course Module:** Seed database with mock courses, create APIs to fetch them, build Course Listing UI.
- **Phase 7: Enrollment Module:** API to link user and course, Enrolled Courses Dashboard UI.
- **Phase 8: Recommendation Logic:** Build backend logic to match user interests with course tags, excluding already enrolled courses.
- **Phase 9: Progress Tracking:** API to update progress, UI progress bars.
- **Phase 10: Dashboard UI Polish:** Make it look premium, add responsive design.
- **Phase 11: Testing:** Postman testing for APIs, browser testing for UI.
- **Phase 12: GitHub Upload:** Finalize README, clean code, push.

*Common Beginner Mistakes:* Pushing `.env` to GitHub, forgetting CORS in the backend, mutating React state directly.

---

## 5️⃣ FOLDER STRUCTURE

```text
Online-Learning-Course-Recommendation-Platform/
│
├── client/                     # Frontend React App (Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable UI components (Navbar, CourseCard)
│   │   ├── pages/              # Page components (Dashboard, Login, Courses)
│   │   ├── context/            # React Context (AuthContext)
│   │   ├── App.jsx             # Main React component & Routing
│   │   └── main.jsx            # React DOM rendering
│   └── package.json            
│
├── server/                     # Backend Node/Express App
│   ├── config/                 # Database connection config
│   ├── controllers/            # Request handlers (authController, courseController)
│   ├── middleware/             # JWT auth middleware, Error handlers
│   ├── models/                 # Mongoose schemas (User, Course, Enrollment)
│   ├── routes/                 # API route definitions
│   ├── server.js               # Entry point for backend
│   └── package.json
│
├── README.md                   # Project documentation
└── .gitignore                  # Ignored files (node_modules, .env)
```

---

## 6️⃣ INSTALLATION GUIDE

1. **Node.js Setup:** Download and install Node.js (v18+ recommended) from nodejs.org.
2. **MongoDB Setup:** Install MongoDB Community Edition locally or create a free MongoDB Atlas cluster online. Get your connection string.
3. **Environment Variables:**
   - In `server/`, create a `.env` file:
     ```env
     PORT=5000
     MONGO_URI=mongodb://127.0.0.1:27017/edtech_platform
     JWT_SECRET=supersecretkey_change_in_production
     ```
   - In `client/`, create a `.env` file:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```

**Commands for Windows/Mac:**
```bash
# Clone the repository
git clone <your-repo-url>
cd Online-Learning-Course-Recommendation-Platform

# Setup Backend
cd server
npm install
npm run dev # Starts backend on port 5000

# Setup Frontend (in a new terminal)
cd ../client
npm install
npm run dev # Starts frontend on localhost:5173
```

---

## 8️⃣ VIRTUAL SIMULATION

To demonstrate this in an interview or video:
1. **Create Sample User:** Go to `/register`, enter name, email, and choose interests like "AI", "Web Development".
2. **Dashboard View:** Log in. The dashboard will initially show 0 enrolled courses.
3. **Recommendations:** Scroll down to the "Recommended for You" section. You will see AI and Web Dev courses.
4. **Browse Catalog:** Go to "All Courses" and see the diverse mock courses.
5. **Enroll:** Click on a recommended course and hit "Enroll Now".
6. **Track Progress:** Go back to the dashboard. The course is now under "My Learning". Click "Update Progress" and simulate watching a video to increase it to 50%.
7. **Screenshots to capture:** Login Page, Main Dashboard with Recommendations, Course Detail Page, and Progress Bar visual.

---

## 9️⃣ HOW TO RUN PROJECT

- **Backend Commands:** `cd server`, `npm run dev` (Ensure MongoDB is running).
- **Frontend Commands:** `cd client`, `npm run dev`.
- **Expected Output:** Backend says `MongoDB Connected` & `Server running on port 5000`. Frontend opens at `http://localhost:5173`.
- **Localhost URLs:**
  - Frontend: `http://localhost:5173`
  - Backend API base: `http://localhost:5000/api`

---

## 🔟 GITHUB UPLOAD STEPS

1. Go to GitHub and create a new repository: `MERN-EdTech-Course-Recommendation`.
2. Open terminal in the root folder (where `client` and `server` live).
3. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete MERN EdTech platform"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
4. **CRITICAL:** Ensure `.env` is in `.gitignore` so your secrets don't leak. Create a `.env.example` file instead with dummy values.
5. Add screenshots of your UI to a `docs/` folder and link them in the README.

*GitHub Tags:* `mern-stack`, `reactjs`, `nodejs`, `recommendation-system`, `edtech`, `full-stack`.
