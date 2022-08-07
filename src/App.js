import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import {Login} from './Login';
import {SignUp} from './SignUp'
import { Home } from './Home';
import Freecomponent from './Freecomponent';
import AuthComponent from './AuthComponent';
import Cookies from 'universal-cookie';
function App() {
	const cookies = new Cookies();
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<div><Home /></div>} exact />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/signin' element={<Login />} />
		<Route path='/free' element={<Freecomponent />} />
		<Route path='/auth' element={cookies.get("TOKEN") ? <AuthComponent /> : <Navigate to='/' />} />
		
	</Routes>
	</Router>
);
}

export default App;
