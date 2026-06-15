import { prisma } from "../lib/prisma";

export const getAllProducts = async (query?: {
  search?: string;
  category?: string;
}) => {
  return prisma.product.findMany({
    where: {
      ...(query?.search && {
        name: {
          contains: query.search,
          mode: "insensitive",
        },
      }),
      ...(query?.category && {
        category: query.category,
      }),
    },
  });
};

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
  });
};