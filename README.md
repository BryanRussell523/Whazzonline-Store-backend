# Whazzonline-Store-backend
A scalable REST API for an e-commerce system built with Node.js, Express, TypeScript, Prisma, and PostgreSQL.
---

## Features

- User authentication (JWT)
- Password hashing (bcrypt)
- Product management
- Cart & order system
- Protected checkout route
- Relational database design (Prisma ORM)
- RESTful API architecture
- 
## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcryptjs
- 
## Installation and set up steps
```bash
git clone https://github.com/BryanRussell523/Whazzonline-Store-backend
cd Whazzonline-Store-backend
npm install

create .env:
DATABASE_URL=postgresql://user:password@localhost:5432/mini-commerce
JWT_SECRET=your_secret_key
PORT=5000

Database set up:
npx prisma generate
npx prisma db push
npx prisma db seed

Running the Server:
npm run dev

Server runs on:
http://localhost:5000

Known Limitations
1. No refresh token system
2. No admin dashboard
3. No payment integration yet
4. Basic error handling

Future Improvements
1. Role-based access control (Admin/User)
2. Payment gateway (Stripe / Paystack)
3. Order history per user
4. Stock management improvements

