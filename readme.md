# MERN Stack Authentication System

## Overview

This project is a MERN stack authentication system with user registration, login, email verification, and password reset features. The backend is built with Node.js, Express, and MongoDB.

## Server Structure

- **server.js**: Entry point, sets up Express, middleware, routes, and connects to MongoDB.
- **config/**
  - `mongodb.js`: MongoDB connection logic.
  - `nodemailer.js`: Email sending configuration.
- **controllers/**
  - `authController.js`: Handles authentication (register, login, logout, email verification, password reset).
  - `userController.js`: Handles user data retrieval.
- **middleware/**
  - `userAuth.js`: Middleware for route protection using JWT.
- **models/**
  - `userModel.js`: Mongoose schema for user data.
- **routes/**
  - `authRoutes.js`: Authentication-related API endpoints.
  - `userRoutes.js`: User data API endpoint.

## Main Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- nodemailer
- dotenv
- cookie-parser
- cors

## API Endpoints

### Auth Routes (`/api/auth`)

- `POST /register`: Register a new user.
- `POST /login`: Login and receive JWT.
- `POST /logout`: Logout user.
- `POST /send-verify-otp`: Send email verification OTP (protected).
- `POST /verify-account`: Verify user email (protected).
- `POST /send-reset-otp`: Send password reset OTP.
- `POST /reset-password`: Reset password.

### User Routes (`/api/user`)

- `GET /data`: Get user data (protected).

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Set up a `.env` file with your MongoDB URI, JWT secret, and email credentials.
3. Start the server:

   ```
   npm start
   ```

   or for development:

   ```

   npm run server
   ```

## Client

The client is a React application built with Vite and Tailwind CSS. It provides the user interface for authentication and account management.

### Structure

- **src/App.jsx**: Main React app with routing.
- **src/pages/**: Home, Login, EmailVerify, ResetPassword pages.
- **src/components/**: Header, Navbar components.
- **src/context/AppContext.jsx**: Global context for state management.
- **public/**: Static assets.
- **index.html**: Main HTML entry point.

### Main Dependencies

- react
- react-dom
- react-router-dom
- axios
- react-toastify
- tailwindcss
- vite

### Getting Started

1. Navigate to the `client` folder:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the client:
   ```
   npm run dev
   ```
