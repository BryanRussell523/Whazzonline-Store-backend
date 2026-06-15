import { prisma } from "../lib/prisma";

interface CheckoutItem {
  productId: string;
  quantity: number;
}

export const createOrder = async (
  userId: string,
  items: CheckoutItem[]
) => {
  // 1. Get products from DB
  const productIds = items.map((i) => i.productId);

  const products = await prisma.product.findMany({
    where: {
      id: { in: productIds },
    },
  });

  if (products.length === 0) {
    throw new Error("No valid products found");
  }

  // 2. Calculate total
  let total = 0;

  const orderItemsData = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) {
      throw new Error(`Product not found: ${item.productId}`);
    }

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    return {
      productId: product.id,
      quantity: item.quantity,
      price: product.price,
    };
  });

  // 3. Create order + items
  const order = await prisma.order.create({
    data: {
      userId,
      total,
      status: "pending",
      items: {
        create: orderItemsData,
      },
    },
    include: {
      items: true,
    },
  });

  return order;
};