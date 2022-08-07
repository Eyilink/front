import React from 'react'
import './Footer.css'
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsEnvelopeFill,BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import {NavLink} from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='all'>
    <div className='m-cont'>
       <div className='mc2'>
       <div>
            <BsTelephoneFill className='icon'/>
            <p> Telephone</p>
            </div>
            <div>
            <TiMessages className='icon'/>
            <p> Contactez-nous</p>
            </div>
           <div> <BsEnvelopeFill className='icon' />
           <p> NewsLetter</p>
           </div>
           
        </div>
        <div className='mc1'>
            <BsFacebook  className='icon'/>
            <BsInstagram className='icon '/>
            <BsTwitter className='icon'/>
            <BsYoutube className='icon'/>
        </div>   
    </div>
    <div className='m-cont2'>
     <div>
      <NavLink to="/" className="text" > <p>Accueil</p></NavLink>
      </div>
    </div>
    </div>
  )
}

