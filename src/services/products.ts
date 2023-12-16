import config from '../../config'
import { products } from '../database/products.json'

export const getAllProducts = async (): Promise<typeof products> => {
	return products
}

export const getProductById = async ({
	id
}: {
	id: string
}): Promise<(typeof products)[0] | undefined> => {
	const response = await fetch(`${config.apiUrl}/products/${id}`)
	return response.json()
}

export const searchProducts =async (
	{search}: {search: string}
): Promise<any> => {
	let response
	if(search && search.length > 0) {
		response = await fetch(`${config.apiUrl}/products?search=${search}`)
	} else {
		response = await fetch(`${config.apiUrl}/products`)
	}
	return await response.json()
}
