import {products} from '../database/products.json'

export const getAllProducts =async () => {
    return products
}

export const getProductById = async ({id} : {id: string}) => {
    return products.find((el) => el.id.toString() === id)
}