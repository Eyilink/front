import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route ,Navigate,Outlet,useLocation} from 'react-router-dom';
import {Login} from './Login';
import {SignUp} from './SignUp'
import { Home } from './Home';
import Freecomponent from './Freecomponent';
import AuthComponent from './AuthComponent';
import Cookies from 'universal-cookie';
import { Footer } from './Footer';
import { FixedSocialNetworkBar } from './fixedSocialNetworkBar';
import { useEffect } from 'react';

function App() {
	const cookies = new Cookies();
return (
	<Router>
	<ScrollToTop>
	<Routes >
	<Route path='/' element={<Layout />}>
		<Route index element={<div><Home /></div>} exact />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/signin' element={<Login />} />
		<Route path='/free' element={<Freecomponent />} />
	</Route>
	<Route path='/auth' element={cookies.get("TOKEN") ? <AuthComponent /> : <Navigate to='/' />} />	
	</Routes>
	<Footer />
	</ScrollToTop>
	</Router>
);
}
 function Layout () {
    return (
        <div>
            <Navbar />
			<FixedSocialNetworkBar />
            <div className="container">
              
              <Outlet />
            </div>
        </div>
    )
}


const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [location]);
  
	return <>{props.children}</>
  };
export default App;
