# Expense Tracker App

A sleek and modern Expense Tracker built with React, Tailwind CSS, and Vite. Track your spending, filter expenses, and manage your budget — all with a beautiful UI.

---

## Features

- Add, delete, and filter expenses
- Real-time search by description
- Total balance calculation
- Clean Tailwind UI with subtle animations
- Fully responsive for mobile and desktop
- Built with Vite for fast performance

---

## Tech Stack

- React
- Tailwind CSS
- Vite
- Deployed via Vercel / Netlify / Cloudflare Pages

---

## Project Structure

expense-tracker/ ├── public/ ├── src/ │ ├── App.jsx # Main React component │ ├── main.jsx # App entry point │ ├── index.css # Tailwind CSS directives ├── tailwind.config.js # Tailwind setup ├── vite.config.js # Vite config └── README.md



---

## Getting Started Locally

### 1. Clone the Repository

```
git clone https://github.com/jacksonmativo/expense-tracker.git
cd expense-tracker
2. Install Dependencies

npm install
3. Start the Development Server

npm run dev
Setting Up React + Vite + Tailwind CSS (Manual Setup)
If you want to create a similar project from scratch:

1. Create a new Vite + React app

npm create vite@latest expense-tracker -- --template react
cd expense-tracker
2. Install Tailwind CSS
Follow the official Tailwind CSS + Vite Guide or use:


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
3. Configure tailwind.config.js
js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. Add Tailwind Directives to src/index.css
css

@tailwind base;
@tailwind components;
@tailwind utilities;
5. Start the app

npm run dev
Deployment
This app can be deployed to:

Vercel

Netlify

Cloudflare Pages

Acknowledgments
Built by JACKSON MATIVO

License
This project is open-source
