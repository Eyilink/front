import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './Login';
import {SignUp} from './SignUp'
import { Home } from './Home';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<div><Home /></div>} exact />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/signin' element={<Login />} />
	</Routes>
	</Router>
);
}

export default App;
