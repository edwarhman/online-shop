import { products } from '../database/products.json'

export const getAllProducts = async (): Promise<typeof products> => {
  return products
}

export const getProductById = async ({ id }: { id: string }): Promise<typeof products[0] | undefined> => {
  console.log({})
  return products.find((el) => el.id.toString() === id)
}
