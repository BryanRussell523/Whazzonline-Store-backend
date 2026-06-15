import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productsRoutes";
import authRoutes from "./routes/auth.routes";
import orderRoutes from "./routes/order.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});