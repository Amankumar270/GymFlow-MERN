# 🏋️‍♂️ GymFlow - MERN Stack Membership Management Portal

GymFlow is a complete, production-ready full-stack subscription management ecosystem built using the **MERN (MongoDB, Express.js, React, Node.js)** stack. Originally conceived during my **Summer Training Program**, this application went through a massive evolution from a basic landing template into a high-end SaaS platform featuring private member portals, master administrative panels, and dynamic billing cycle tracking.

---

## 🚀 Key Features

* **Dynamic Member Dashboard:** A personalized, state-driven profile space showing real-time membership activation tags, active renewal windows, and auto-mapped plan privileges.
* **Self-Serve Plan Cancellation:** Integrated a custom subscription opt-out mechanism allowing members to instantly terminate plans and wipe server states cleanly via custom MongoDB queries.
* **Master Admin Security Gate:** Engineered an inline authentication wall on the administration client utilizing `sessionStorage` route tokens. The administrative layout automatically hides all layout components and locks views behind a credential challenge that clears immediately upon closing the browser tab.
* **Real-Time Member Roster Directory:** Added a dedicated administration overview grid that aggregates active user indices directly from the database, displaying registration metadata, active billing tiers, and structural status badges.
* **Seamless Multi-Route Scrolling:** Crafted a smart navigation layout using React Hooks (`useLocation`) that bridges traditional page routing with smooth anchoring—perfectly managing page re-routes back home before scrolling down to targeted blocks.
* **Robust Backend REST API:** Node.js & Express server equipped with secure user authorization protocols, custom membership modification routes, protected admin access variables, and structured Mongoose schemas.
* **Premium Tailwind CSS UI:** A clean, luxury aesthetic incorporating scannable summary components, intuitive layouts, interactive call-to-actions, and interactive "Coming Soon" fallbacks.

---

## 🛠️ Tech Stack Used

* **Frontend:** React, Tailwind CSS, React Router DOM, Axios, React Icons
* **Backend:** Node.js, Express.js, JWT (JSON Web Tokens), Multer, Cors
* **Database:** MongoDB, Mongoose ODM

---

## 💻 How to Run the Project Locally

Follow these simple steps to set up and run the entire application on your local machine:

### Step 1: Clone the Repository
```bash
git clone https://github.com/Amankumar270/GymFlow-MERN.git
cd GymFlow-MERN
```
### Step 2: Set Up and Start the Backend Server
1. Navigate to the backend directory:
```bash
cd backend
```
2. Install server dependencies:
```bash
npm install
```
3. Create a .env file in the root of the backend folder and add your environment variables:
```bash 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_string
ADMIN_EMAIL=owner@gymflow.com
ADMIN_PASSWORD=your_secure_admin_password
```
4. Start the server
```bash 
npm start
```
### Step 3: Set Up and Start the Frontend & Admin Applications
1. To run the User Frontend: Open a terminal window at the project root directory and run:
```bash
cd frontend
npm install
npm run dev
```

2. To run the Administration Panel: Open a separate terminal window at the project root directory and run:
```bash
cd admin
npm install
npm run dev
```