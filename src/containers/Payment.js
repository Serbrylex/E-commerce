import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import ProductsContext from '../context/index'

import '../styles/components/Payment.css'

import useGetTotal from '../hooks/useGetTotal'

const Payment = () => {

	const history = useHistory()
	const { state: { buyer }, addNewOrder } = useContext(ProductsContext)
	const { state: { cart } } = useContext(ProductsContext)

	const total = useGetTotal(cart)

	const paypalOptions = {
		clientId: process.env.PAYPAL,
		intent: 'capture',
		currency: 'MXN'
	}

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect'
	}

	const handlePaymentSuccess = data => {
		console.log(data)
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer,
				products: cart,
				payment: data
			}

			addNewOrder(newOrder)
			history.push('/checkout/success')
		}
	}

	const handlePaymentError = data => {

	}

	const handlePaymentCancel = data => {

	}

	return(
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resumen del pedido:</h3>

				{cart.map((item, key) => {
					<div className="Payment-item" key={key}>
						<div className="Payment-element">
							<h4>{item.title}</h4>
							<span>${item.price}</span>
						</div>
					</div>
				})}

				<div className="Payment-button">
					<PayPalButton 
						paypalOptions={paypalOptions}
						buttonStyles={buttonStyles}
						amount={total}
						onPaymentStart={() => console.log('Start Payment')}
						onPaymentSuccess={data => handlePaymentSuccess(data)}
						onPaymentError={error => handlePaymentError(error)}
						onPaymentCancel={data => handlePaymentCancel(data)}
					/>
				</div>
			</div>
		</div>
	)
}

export default Payment