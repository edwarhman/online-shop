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

export const searchProducts = async ({
	search
}: {
	search: string
}): Promise<typeof products> => {
	return products.filter((product) => {
		const values = Object.values(product)
		return values
			.join(' ')
			.toLowerCase()
			.match(new RegExp(`${search}`))
	})
}
