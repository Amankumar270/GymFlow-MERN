# 🏋️‍♂️ GymFlow - MERN Stack Membership Portal

GymFlow is a complete, full-stack subscription management web application built using the **MERN (MongoDB, Express.js, React, Node.js)** stack. This project was developed as the capstone submission for my **Summer Training Program**, transforming a basic retail e-commerce structure into a high-end service subscription ecosystem.

---

## 🚀 Key Features

* **Dynamic Admin Panel:** Fully functioning control panel built in React using `FormData` to upload media images, write pricing packages, and specify facilities.
* **Robust Backend REST API:** Node.js & Express server equipped with structured Mongoose schemas and Multer middleware to handle image file storage.
* **Premium Tailwind CSS UI:** A luxury pricing table card layout that scales automatically across mobile and desktop devices.
* **Safe State Control:** Handled React hooks (`useState`, `useEffect`) optimally to ensure smooth inputs and stop backend infinite fetching loops.

---

## 🛠️ Tech Stack Used

* **Frontend:** React, Tailwind CSS, Axios, React Icons
* **Backend:** Node.js, Express.js, Multer
* **Database:** MongoDB, Mongoose ODM

---

## 💻 How to Run the Project Locally

### 1. Clone the repository
```bash
# STEP 1: Clone the Repository and enter the project folder
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd GymFlow

# STEP 2: Set up and start the Backend API Server (Runs on port 5000)
cd backend
npm install
npm start

# STEP 3: Open a new terminal tab, navigate to the frontend folder, and launch the React app
cd ../frontend
npm install
npm run dev

