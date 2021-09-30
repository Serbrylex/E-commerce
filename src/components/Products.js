import React, { useContext } from 'react'
import '../styles/components/Products.css'
import Product from './Product'

import ProductsContext from '../context/index'

const Products = () => {

	const { state: { products }, addToCart } = useContext(ProductsContext)
	const { state: { cart } } = useContext(ProductsContext)

	const handleAddToCart = product => {
		addToCart(product)
	}

	return(
		<div className="Products">
			<div className="Products-items">
				{products.map(product => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
				))}
			</div>
		</div>
	)
}

export default Products