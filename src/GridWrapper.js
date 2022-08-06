import React, { useState } from "react";
import './GridWrapper.css' ;
import { BasicBox } from "./BasicBox";
export const GridWrapper = (props) => {
    const _wprapperTab = [
        {
            bg : "https://www.gifimili.com/gif/2021/06/bivouac-prudent-sous-les-etoiles.gif",
            gridArea : 'a'
        },
        {
            bg : "https://www.gifimili.com/gif/2021/06/bivouac-prudent-sous-les-etoiles.gif",
            gridArea : 'c'
        },
        {
            bg : "https://image.shutterstock.com/image-photo/kindle-fire-cooking-forest-on-600w-1851958828.jpg",
            gridArea : 'e'
        }
        
    ]
    return(
        <>
        <div id="first">
        <div className="wrapper">
            {_wprapperTab.map((item)=><BasicBox bg={item.bg} area={item.gridArea} />)}
        </div>
        </div>
        </>
    )

}
