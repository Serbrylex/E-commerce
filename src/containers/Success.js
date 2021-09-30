import React, { useContext } from 'react'
import ProductsContext from '../context/index'

import Map from '../components/Map'

import '../styles/components/Success.css'

const Success = () => {

	const { state: { buyer } } = useContext(ProductsContext)
	
	return(
		<div className="Success">
			<div className="Success-content">
				<h2>{buyer.name}, gracias por tu compra</h2>
				<span>Tu pedido se entregara en 3 días a tu dirección:</span>
				<div className="Success-map">
					<Map />
				</div>
			</div>
		</div>
	)
}

export default Success