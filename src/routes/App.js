import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Containers
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

import ContextProvider from '../context/Provider'

const App = () => {
	return(
		<ContextProvider>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/checkout/information" component={Information} />
						<Route exact path="/checkout/payment" component={Payment} />
						<Route exact path="/checkout/success" component={Success} />
						<Route path="/" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</ContextProvider>
	)	
}

export default App