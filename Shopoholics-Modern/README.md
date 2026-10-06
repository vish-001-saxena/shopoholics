# Shopoholics — Modern MERN E-Commerce

A clean, portfolio-ready full-stack e-commerce application built with **MongoDB, Express 5, React 19, Node.js, Redux Toolkit and Vite**.

## What changed from the old project

- Product catalog now lives in MongoDB instead of depending on DummyJSON.
- Added a real product API: search, category filtering, featured products and product details.
- Reworked cart persistence around MongoDB product IDs.
- Improved authentication with hashed passwords, JWT cookies and safer development/production cookie settings.
- Added Helmet, request logging and centralized API error handling.
- Stripe Checkout is supported but **optional**. Without a Stripe key, checkout uses a local demo flow, so the project is still easy to run.
- Added a database seed command with 12 ready-to-use products.
- Rebuilt the frontend with a modern responsive storefront, search, filters, product details, authentication and cart.
- Added environment examples and simple root scripts.

## Requirements

- Node.js 20+ recommended
- MongoDB local installation **or** a MongoDB Atlas connection
- npm

## Run in 5 steps

### 1. Install dependencies

From the project root:

```bash
npm run install:all
```

### 2. Configure the backend

Copy:

```text
server/.env.example → server/.env
```

Minimum development configuration:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/shopoholics
JWT_SECRET=replace-with-a-long-random-secret
CLIENT_URL=http://localhost:5173
STRIPE_SECRET=
```

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

### 3. Configure the frontend

Copy:

```text
client/.env.example → client/.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Seed the products

```bash
npm run seed
```

### 5. Start both apps

Terminal 1:

```bash
npm run dev:server
```

Terminal 2:

```bash
npm run dev:client
```

Open **http://localhost:5173**.

## Stripe

Stripe is optional. If `STRIPE_SECRET` is empty, the checkout button uses the built-in demo checkout so you can demonstrate the full shopping flow without configuring a payment provider.

For real Stripe Checkout, add your Stripe secret key to `server/.env`.

## API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Sign in |
| POST | `/api/auth/logout` | Sign out |
| GET | `/api/auth/me` | Current user |
| GET | `/api/products` | Product list/search/filter |
| GET | `/api/products/categories` | Categories |
| GET | `/api/products/:id` | Product details |
| GET | `/api/cart` | Current cart |
| POST | `/api/cart/items` | Add item |
| PATCH | `/api/cart/items/:productId` | Change quantity |
| DELETE | `/api/cart/items/:productId` | Remove item |
| POST | `/api/cart/checkout` | Checkout |
| DELETE | `/api/cart` | Clear cart |

## Project structure

```text
shopoholics/
├── client/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── lib/
│       └── pages/
├── server/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── scripts/
├── package.json
└── README.md
```

## Portfolio / interview talking points

This project demonstrates:

- REST API design
- MongoDB data modelling and references
- JWT authentication with HTTP-only cookies
- Password hashing with bcryptjs
- Redux Toolkit state management
- React routing and reusable components
- Search/filter UX
- Persistent shopping cart
- Stripe Checkout integration
- Environment-based configuration
- Basic backend security hardening with Helmet and CORS
