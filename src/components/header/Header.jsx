import React from 'react'
import { Link } from 'react-router-dom'
import header from './header.css'
const Header = () => {
  return (
    <div className='header-cont'>
        <div className="header">
           <Link to='/'><div className="logo">Xpense</div></Link> 
            <div className="track">tracker</div>
        </div>
    </div>
  )
} 

export default Header