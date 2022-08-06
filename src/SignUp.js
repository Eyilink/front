import React, { useState } from "react";
import './Login.css' ;
import {FaMountain} from 'react-icons/fa'
import Cookies from 'js-cookie'
export const SignUp = () => {

   
   const handleSubmit = (event) =>{
        event.preventDefault();
       
        fetch(process.env.REACT_APP_API+'signup/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:event.target.username.value,
                email:event.target.email.value,
                password:event.target.username.value
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    
    }
    return(
       
        <div className="p1">
            <div className="log">
                <form className="formFields" onSubmit={handleSubmit}>
                    <div className="lfa">
                        <FaMountain />
                    </div>
                    <p>REGISTER</p>
                    <div className="formField">
                        
                        <input id="username" className="in" type="text" placeholder="Enter username" name="username"  required/>
                        <input id="email"  className="in" type="text" placeholder="Enter email" name="email"  required/>
                        <input id="password"  className="in" type="text" placeholder="Enter password" name="password"  required/>
                        <input id="password2"  className="in" type="text" placeholder="Confirm password" name="password2"  required/>
                        <div>
                        
                        </div>
                        <button className="butt" type="submit">REGISTER</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

