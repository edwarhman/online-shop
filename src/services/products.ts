import { products } from '../database/products.json'

export const getAllProducts = async (): Promise<typeof products> => {
	return products
}

export const getProductById = async ({
	id
}: {
	id: string
}): Promise<(typeof products)[0] | undefined> => {
	return products.find((el) => el.id.toString() === id)
}

export const searchProducts =async (
	{search}: {search: string}
): Promise<any> => {
	let response
	if(search) {
		response = await fetch(`${import.meta.env.PUBLIC_PRODUCTS_API}/products?search=${search}`)
	} else {
		response = await fetch(`${import.meta.env.PUBLIC_PRODUCTS_API}/products`)
	}

	return response.json()
}
