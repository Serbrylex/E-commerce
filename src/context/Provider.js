import React, { useState, useEffect } from 'react'
import initialState from '../initialState'

// Context
import ProductsContext from './index'

const ContextProvider = ({ children }) => {
	
	const [state, setState] = useState(initialState)

	const addToCart = payload => {
		setState({
			...state,
			cart: [...state.cart, payload]
		})
	}

	const removeFromCart = position => {

		let newCart = state.cart.slice()
		newCart.splice(position, 1)
		setState({
			...state,
			cart: newCart
		})
	}

	const addToBuyer = (payload) => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
		})
	}

	const addNewOrder = (payload) => {
		setState({
			...state,
			orders: [...state.orders, payload]
		})
	}

	const value = {
		addToCart,
		removeFromCart,
		addToBuyer,
		addNewOrder,
		state
	}

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ContextProvider