# 💳 Payment Gateway App (React + Node.js + Razorpay)

A simple and secure payment gateway application built with **React.js**, **Node.js (Express)**, and integrated with **Razorpay API** for test payments. The frontend is deployed on **Netlify**, and the backend on **Render.com**.

---

## 🚀 Live Demo

🌐 Frontend: https://exquisite-froyo-df930b.netlify.app/ 
🔗 Backend API: https://payment-integration-8syu.onrender.com

> **Note**: This project uses Razorpay Test Mode. No real transactions are processed.

---

## 🛠️ Tech Stack

| Layer      | Tech Used          |
|------------|--------------------|
| Frontend   | React.js, JavaScript, HTML/CSS |
| Backend    | Node.js, Express.js |
| Payment    | Razorpay API (Test Mode) |
| Deployment | Netlify (Frontend), Render (Backend) |

---

## ✨ Features

- 💰 Enter amount and pay via Razorpay test card
- 🔒 Secure server-side order creation
- 📦 Clean React UI with loading state
- 🌐 Works fully in test mode (no real money)
- 📱 Responsive design

---

## 🖼️ Screenshots

> (Add screenshots of the payment form, success screen, etc.)

---

## 📁 Folder Structure

project-root/
├── backend/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ └── App.js
│ └── public/
│ └── _redirects

yaml
Copy
Edit

---

## 🔑 Razorpay Test Card for Testing

Use this test card on payment page:

Card Number: 4111 1111 1111 1111
Expiry: Any future date (e.g. 12/25)
CVV: 123
OTP: 123456

yaml
Copy
Edit

---

## 🧪 How to Run Locally

### 🔧 Backend (Node.js)

```bash
cd backend
npm install
Create .env file:

ini
Copy
Edit
RAZORPAY_KEY_ID=your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret
Then run:

bash
Copy
Edit
node server.js
💻 Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
🌍 Deployment Setup
🚀 Frontend (Netlify)
Build React app:

bash
Copy
Edit
npm run build
Add public/_redirects file:

bash
Copy
Edit
/*  /index.html  200
Upload /build folder to Netlify.

☁️ Backend (Render)
Go to https://render.com

Create a new web service

Connect GitHub repo

Set build & start command:

makefile
Copy
Edit
Build: npm install
Start: node server.js
Add .env variables in Render dashboard

🙌 Acknowledgements
Razorpay Docs

Netlify

Render

📫 Contact
Made by Your Name
📧 Email: mdtousifalam85@gmail.com
🌐 Portfolio: Comming soon.

yaml
Copy
Edit

---
