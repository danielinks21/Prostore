"use server"

import { prisma } from "@/lib/prisma";
import { LASTEST_PRODUCTS_LIMIT } from "../constants";
//GET LATEST PRODUCTS
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LASTEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return data.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
}
  
    //get single product by slug  

    export async function getProductBySlug(slug: string) {
      return await prisma.product.findFirst({
        where : {
          slug : slug
        },
    });
    }
  