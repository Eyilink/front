import React, { useState } from "react";
import './Login.css' ;
import {FaMountain} from 'react-icons/fa';
import Cookies from 'js-cookie';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
   const handleSubmit = (event) =>{
    event.preventDefault();
    const configuration = {
        method: "post",
        url: "https://nodejs-mongodb-authapp.herokuapp.com/register",
        data: {
          email,
          password,
        },
      };
      axios(configuration)
      .then((result) => {
        setRegister(true);
        useNavigate("/auth" , {replace: true});
      })
      .catch((error) => {
        error = new Error();
      });

        // event.preventDefault();
       
        // fetch(process.env.REACT_APP_API+'signup/',{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         username:event.target.username.value,
        //         email:event.target.email.value,
        //         password:event.target.username.value
                
        //     })
        // })
        // .then(res=>res.json())
        // .then((result)=>{
        //     alert(result);
        // },
        // (error)=>{
        //     alert('Failed');
        // })
    
    }
    return(
       
        <div className="p1">
            <div className="log">
                <div className="formFields" >
                    <div className="lfa">
                        <FaMountain />
                    </div>
                    <p>REGISTER</p>
                    {/* <div className="formField">
                        
                        <input id="username" className="in" type="text" placeholder="Enter username" name="username"  required/>
                        <input id="email"  className="in" type="text" placeholder="Enter email" name="email"  required/>
                        <input id="password"  className="in" type="text" placeholder="Enter password" name="password"  required/>
                        <input id="password2"  className="in" type="text" placeholder="Confirm password" name="password2"  required/>
                        <div>
                        
                        </div>
                        <button className="butt" type="submit">REGISTER</button>
                    </div> */}
                     <Form onSubmit={(e)=>handleSubmit(e)} className="form2_">
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
                        <Form.Group controlId="formBasicPasswordChk">
                        
                        <Form.Control
                            type="password"
                            name="passwordchk"
                            
                            onChange={(e) => {if(password == e.target.value)setPassword(e.target.value);}}
                            placeholder="Confirm Password"
                        />
                        </Form.Group>
                        {/* submit button */}
                        <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        >
                        Register
                        </Button>
                    </Form>
                </div>
            </div>
            {/* {register ? (
          <p className="text-success">You Registered Successfully</p>
        ) : (
          <p className="text-danger">Registration Failed</p>
        )} */}
        </div>
    )
}

