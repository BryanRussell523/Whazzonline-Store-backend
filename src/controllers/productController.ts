import { Request, Response } from "express";
import { getAllProducts, getProductById } from "../services/product.services";

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts(req.query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const fetchProductById = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id as string);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};