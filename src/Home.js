import React, { useState } from "react";
import './Home.css' ;
import { BasicBox } from "./BasicBox";
import { GridWrapper } from "./GridWrapper";
import { HomeTop } from "./HomeTop";
export const Home = (props) => {
    return(
        <>
        <div className="home">
            <HomeTop />
            <GridWrapper />
        </div>
        </>
    )
}