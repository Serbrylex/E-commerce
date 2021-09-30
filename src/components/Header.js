import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import '../styles/components/Header.css'

import ProductsContext from '../context/index'

const Header = () => {

	const { state: { cart } } = useContext(ProductsContext)

	return(
		<div className="Header">
			<h1 className="Header-title">
				<Link to="/">Platzi Conf Merch</Link>
			</h1>
			<div className="Header-checkout">
				{cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
				<Link to="/checkout">	
					<i className="fas fa-shopping-basket"></i>
				</Link>
			</div>
		</div>
	)
}

export default Header