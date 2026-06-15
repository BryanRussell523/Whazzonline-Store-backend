require("dotenv").config();

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  await prisma.orderItem.deleteMany().catch(() => { });
  await prisma.order.deleteMany().catch(() => { });
  await prisma.user.deleteMany().catch(() => { });
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        description: "Premium noise cancelling headphones with deep bass.",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
        category: "Electronics",
        stock: 25,
      },
      {
        name: "Smart Watch",
        description: "Track your fitness, heart rate and notifications.",
        price: 149.99,
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
        category: "Electronics",
        stock: 18,
      },
      {
        name: "Running Shoes",
        description: "Lightweight and comfortable shoes for daily runs.",
        price: 79.99,
        image:
          "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=800&q=80",
        category: "Fashion",
        stock: 40,
      },
      {
        name: "Backpack",
        description: "Durable backpack with laptop compartment.",
        price: 59.99,
        image:
          "https://images.unsplash.com/photo-1623189184856-4da2a5c3a88c?auto=format&fit=crop&w=800&q=80",
        category: "Fashion",
        stock: 30,
      },
      {
        name: "Coffee Maker",
        description: "Brew café-quality coffee at home.",
        price: 120.0,
        image:
          "https://images.unsplash.com/photo-1620807773206-49c1f2957417?auto=format&fit=crop&w=800&q=80",
        category: "Home",
        stock: 12,
      },
      {
        name: "Office Chair",
        description: "Ergonomic chair for long working hours.",
        price: 199.99,
        image:
          "https://images.unsplash.com/photo-1657757996603-acec063f1d9b?auto=format&fit=crop&w=800&q=80",
        category: "Home",
        stock: 8,
      },
    ],
  });

  console.log("Seeded products successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });