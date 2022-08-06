import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './Login';
import {SignUp} from './SignUp'
import { Home } from './Home';
import Freecomponent from './Freecomponent';
import AuthComponent from './AuthComponent';
import ProtectedRoutes from './ProtectedRoutes';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<div><Home /></div>} exact />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/signin' element={<Login />} />
		<Route path='/free' element={<Freecomponent />} />
		<Route path='/auth' element={<AuthComponent/>} />
	</Routes>
	</Router>
);
}

export default App;
