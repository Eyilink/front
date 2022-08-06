import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
VertcialLine
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' >
			About
		</NavLink>
		<NavLink to='/events' >
			Events
		</NavLink>
		<NavLink to='/annual' >
			Annual Report
		</NavLink>
		<NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		</NavMenu>
        <NavBtn>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		<VertcialLine />
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
