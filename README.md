# Shopoholics — Modern MERN E-Commerce

A clean, portfolio-ready full-stack e-commerce application built with **MongoDB, Express 5, React 19, Node.js, Redux Toolkit, and Vite**.

Shopoholics provides a complete shopping experience with product browsing, search and filtering, authentication, persistent cart management, and checkout functionality.

---

## 🚀 Features

### 🛍️ E-Commerce
- Product catalog powered by MongoDB
- Product search and category filtering
- Featured products
- Detailed product pages
- Add/remove products from cart
- Persistent shopping cart
- Quantity management
- Responsive storefront

### 🔐 Authentication & Security
- User registration and login
- Password hashing with `bcryptjs`
- JWT-based authentication
- HTTP-only authentication cookies
- Environment-based configuration
- Helmet security middleware
- CORS configuration
- Centralized API error handling
- Request logging with Morgan

### 💳 Checkout
- Stripe Checkout integration
- Stripe is optional for local development
- Built-in demo checkout when Stripe is not configured
- Full shopping flow can be demonstrated without a payment account

### ⚙️ Backend
- RESTful API architecture
- MongoDB with Mongoose
- Product and user data modelling
- Cart persistence
- Search and category filtering APIs
- Database seeding with 12 ready-to-use products
- Health-check endpoint

### 🎨 Frontend
- React 19
- Vite
- Redux Toolkit
- React Router
- Responsive UI
- Reusable React components
- Modern product browsing experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite |
| Styling | CSS |
| State Management | Redux Toolkit |
| Routing | React Router |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Authentication | JWT, HTTP-only Cookies |
| Password Security | bcryptjs |
| Payments | Stripe Checkout |
| Security | Helmet, CORS |
| Logging | Morgan |

---

## 📋 Requirements

Before running the project, make sure you have:

- **Node.js 20+**
- **npm**
- **MongoDB** local installation or MongoDB Atlas
- A Stripe account/key only if you want to test real Stripe Checkout

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/vish-001-saxena/shopoholics.git
cd shopoholics
