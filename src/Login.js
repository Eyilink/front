import React, { useState } from "react";
import './Login.css' ;
import {FaMountain} from 'react-icons/fa';
import { Form, Button } from "react-bootstrap";


import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";



const cookies = new Cookies();
export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
   const [state , setState] = useState(false);
   const axios = require("axios");
   
   const handleSubmit = (event) =>{
    //window.location.href = '/auth';
    const data = JSON.stringify({
        email: email,
        password: password,
      });
      const config = {
        method: "post",
        url: "https://nodejs-mongodb-authapp.herokuapp.com/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      
      axios(config)
      .then((result) => {
        alert(JSON.stringify(result.data));
         //setLogin(true);
        
        cookies.set("TOKEN", result.data.token, {
            path: "/",
          });
    
       window.location.href = '/auth';
        
        
      })
      .catch((error) => {
        alert("failed");
        //error = new Error();
       
      }); 


   }
//    const handleSubmit = (event) =>{
//         event.preventDefault();
//         if(state === true)
//         {
//         Cookies.set("username",event.target.username.value);
//         Cookies.set("password",event.target.password.value);
//         }
//         fetch(process.env.REACT_APP_API+'login/',{
//             method:'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 username:event.target.username.value,
//                 password:event.target.username.value
                
//             })
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed');
//         })
//   }
    return(
       
        <div className="p1">
            <div className="log">
                <div className="formFields" >
                    <div className="lfa">
                        <FaMountain />
                    </div>
                    <p>LOG IN</p>
                    {/* <div className="formField">
                        
                        <input id="username" className="in" type="text" placeholder={Cookies.get("username") === undefined ? "Enter username" : Cookies.get("username")} name="username"  required/>
                        <input id="password"  className="in" type="text" placeholder={Cookies.get("password") === undefined ? "Enter password" : Cookies.get("password")} name="password"  required/>
                        <div>
                        <input id="chk" className="chk" type="checkbox" name="chk" onChange={(e) => {setState(e.target.checked)}} ></input>
                        <p>Remember me</p>
                        </div>
                        <button className="butt" type="submit"> LOG IN</button>
                    </div> */}
                     <Form onSubmit={(e)=>handleSubmit(e)} className="form_">
                        {/* email */}
                        <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                        </Form.Group>

                        {/* password */}
                        <Form.Group controlId="formBasicPassword">
                        
                        <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        </Form.Group>

                        {/* submit button */}
                        <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        >
                        Login
                        </Button>
                    </Form>
                </div>
            </div>
            {/* {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} */}
        </div>
        
    )
}

