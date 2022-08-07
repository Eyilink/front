import React from "react";
import { Route,Navigate as Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { Component } from "react";
import AuthComponent from "./AuthComponent";
const cookies = new Cookies();


function assumption(props)
{
    return(
        <Route path="/auth" element={< AuthComponent/>} />
    );
}
function noCond(props)
{
    return (
        <Redirect to="/" replace/>
    );
}
export default function ProtectedRoutes({ component: Component, ...restOfProps }) {
    const isAuthenticated = cookies.get("TOKEN");
    
        return (
            <div>
            {
                isAuthenticated ? assumption : noCond 
            }
          </div>
          );
    
  }