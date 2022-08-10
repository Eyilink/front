import React, { useState } from "react";
import './HomeTop.css' ;
import {FaMountain} from 'react-icons/fa'
import logo from './img1.png'
export const HomeTop = () => {

    return(
        <>
        <div className="f">
            <div className="text">
                <a>Bivouac Line</a>
                <p id="para"> New visionary bivouac lines for the 2022 year.</p> 
                <img src="https://boncoin-mayotte.com/wp-content/uploads/2020/04/16234-down-arrow.gif" className="gif"/>
            </div>
            <div className="fc">
            <img src={logo} />
            </div>
        </div>
        </>
    )
}