import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import ProductsContext from '../context/index'

import useInput from '../hooks/useInput'
import useGetTotal from '../hooks/useGetTotal'

import '../styles/components/Information.css'

const Information = () => { 

	const { state: { cart }, addToBuyer } = useContext(ProductsContext)
	const total = useGetTotal(cart)
	const history = useHistory()

	const name = useInput()
	const email = useInput()
	const address = useInput()
	const apto = useInput()
	const city = useInput()
	const country = useInput()
	const state = useInput()
	const cp = useInput()
	const phone = useInput()

	const handleSubmit = () => {
		const data = {
			'name': name,
			'email': email,
			'address': address,
			'apto': apto,
			'city': city,
			'country': country,
			'state': state,
			'cp': cp,
			'phone': phone
		}

		addToBuyer(data)
		history.push('/checkout/payment')
	}

	return(
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Información de contacto:</h2>
				</div>
				<div className="Information-form">
					<form action="">
						<input type="text" placeholder="Nombre Completo" name="name" {...name} />
						<input type="email" placeholder="Correo Electronico" name="email" {...email} />
						<input type="text" placeholder="Dirección" name="address" {...address} />
						<input type="text" placeholder="Apto" name="apto" {...apto} />
						<input type="text" placeholder="Ciudad" name="city" {...city} />
						<input type="text" placeholder="Pais" name="country" {...country} />
						<input type="text" placeholder="Estado" name="state" {...state} />
						<input type="text" placeholder="Código postal" name="cp" {...cp} />
						<input type="text" placeholder="Telefono" name="phone" {...phone} />
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to="/checkout">
							Regresar
						</Link>
					</div>
					<div className="Information-next">
						<button type="button" onClick={handleSubmit}>
							Pagar
						</button>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				{cart.map((item, key) => (
					<div className="Information-item" key={key}>
						<div className="Information-element">
							<h4>{item.title}</h4>
							<span>${item.price}</span>
						</div>
					</div>
				))}
				<div className="Information-item">
					<div className="Information-element">
						<h4>Total</h4>
						<span>${total}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Information