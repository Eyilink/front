import React from 'react'
import './fixedSocialNetworkBar.css'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import imprimante from './images/imprimante.svg'
import lettre from './images/lettre.svg'
import linkedin from './images/linkedin.svg'
import pinterest from './images/pinterest.svg'

export const FixedSocialNetworkBar = () => {
  return (
    <div className='mainContainer'>
        <div>
        <img className='caseA' src={facebook}/>
        <img className='caseB' src={twitter}/>
        <img className='caseC' src={imprimante}/>
        <img className='caseD' src={lettre}/>
        <img className='caseE' src={linkedin}/>
        <img className='caseF' src={pinterest}/>
        
        </div>
    </div>
  )
}

