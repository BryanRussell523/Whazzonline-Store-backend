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

Reason for use of Prisma:

Prisma is a powerful ORM tool that simplifies database interactions with type-safe queries, intuitive data modeling, and efficient migrations. Below are some key reasons why I chose to add ot to my take home assessment:
Type-Safe Queries: Prisma generates type-safe queries based on my database schema, reducing the likelihood of errors in database queries. 

Intuitive Data Modeling: I defined the database schema in a straightforward, readable format, and Prisma converts it into actual database tables. 

Time saving: With an ORM tool, for example prisma, I did not need to write sql queries since they are generated based on my defined schema. Thus time was saved and used on debugging code instead of SQL.

Prisma's advantages make it a great tool for any project that requires efficient and type-safe database access, especially for developers working with TypeScript and Node.js environments.
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

