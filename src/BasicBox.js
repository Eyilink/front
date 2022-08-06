import React, { useState } from "react";
import './BasicBox.css' ;

export const BasicBox = (props) => {
    
    return(
        <>
        <div className="maincore">
           <div className="hover_zoom" style={{backgroundImage: `url(${props.bg})`, gridArea:`${props.area}`}}/>
           <a>Some Titles</a>
           <span>
                New bivouac sessions this year with the marvellous team : L'ardechoise. We accept all forms of payment.
           </span>
        </div>
        </>
    )
}