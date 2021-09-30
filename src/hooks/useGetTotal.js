import { useState, useEffect } from 'react'

const useGetTotal = (cart) => {

	const [total, setTotal] = useState(0)

	useEffect(()=>{
		let sum = 0

		cart.map((item)=>{
			sum += item.price
		})
		
		setTotal(sum)
	},[cart])

	return total
}

export default useGetTotal