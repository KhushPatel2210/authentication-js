Authentication-JS 🔐
A full-stack authentication system built with React 19, Vite, Tailwind CSS, Node.js, Express, MongoDB, and JWT. Includes user registration, login, protected routes, token-based authentication, and email notifications via Nodemailer.

📦 Tech Stack
React 19 + Vite

Tailwind CSS

React Router v7

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Nodemailer for emails

bcryptjs for password hashing

🔐 Environment Variables (.env)
Create a .env file in your server directory with the following values:

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SENDER_EMAIL=you@example.com

🚀 How to Run the Project
📁 Install Dependencies
Navigate into each directory and install the required dependencies:

For Client
cd client
npm install

For Server
cd ../server
npm install

📦 Start the Development Servers
Run both client and server in separate terminal windows or tabs:

Start the Server
npm run server
📝 Uses nodemon for automatic server restarts on code changes.

Start the Client
npm run dev
📝 Runs the React app using Vite.
