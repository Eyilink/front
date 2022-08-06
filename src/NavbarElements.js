import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
position : sticky;
top : 0;
background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 8px) calc(100% - 8px) no-repeat,            linear-gradient(90deg, #247aa8 18%, #8e25a4 100%);
border-radius: 4px;
padding: 4px;
box-sizing: border-box;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
align-items : center;

`;

export const NavLink = styled(Link)`

@keyframes swing {
	15% {
	  transform: translateX(5px);
	}
	30% {
	  transform: translateX(-5px);
	}
	50% {
	  transform: translateX(3px);
	}
	65% {
	  transform: translateX(-3px);
	}
	80% {
	  transform: translateX(2px);
	}
	100% {
	  transform: translateX(0);
	}
  }


color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
	color: #b7c6c9;
	animation: swing 1s ease;
  	animation-iteration-count: 1;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
justify-content : center;

margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const VertcialLine = styled.hr`
  border: 0;
  margin: 0;
  border-left: 2px solid black;
  height: 30px;
  margin-right:1px;
  margin-left:1px;
  @media screen and (max-width: 768px) {
	display: none;
}
`;
export const NavBtn = styled.nav`
display: flex;
border-radius : 4px;
justify-content : center;
background : #ffffff;
height : fit-content;
align-items : center;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius : 4px;
background: transparent;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */

&:hover {
	transition: all 0.2s ease-in-out;
	background: red;
	color: #ffffff;
}
`;
