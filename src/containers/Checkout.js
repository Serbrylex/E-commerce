import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Checkout.css'

import ProductsContext from '../context/index'

import useGetTotal from '../hooks/useGetTotal'

const Checkout = () => {

	const { state: { cart }, removeFromCart } = useContext(ProductsContext)
	const total = useGetTotal(cart)

	const handleRemoveItem = (position) => {
		removeFromCart(position)
	}


	return(
		<div className="Checkout">
			<div className="Checkout-content">
				<h3>Lista de Pedidos:</h3>
				{cart.map((product, key)=>(
					<div className="Checkout-item" key={key}>
						<div className="Checkout-element">
							<h4>{product.title}</h4>
							<span></span>
						</div>
						<button type="button" onClick={()=>handleRemoveItem(key)}><i className="fas fa-trash-alt"></i></button>
					</div>
				))}
			</div>
			<div className="Checkout-sidebar">
				<h3>Precio Total: ${total}</h3>
				<Link to="/checkout/information">
					<button type="button">Continuar pedido</button>
				</Link>
			</div>
		</div>
	)
}

export default Checkout