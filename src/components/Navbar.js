import React from 'react'
import '../style/style.css';
import image from '../img/Bosang Logo-02.png'
import {
Link
    
} from "react-router-dom";
// import About from './About';


export default function Navbar() {
  return (
    <>
    
    <div className='Navbar'>
    <nav>
    <div className="logo">
        <img src={image} alt=""/>
        <span>BOSANG</span>
    </div>
   <div className="nav-content">
    <ul>
        <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/'>Home</Link></li>
        <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/about'>About us</Link></li>
        <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/whitepaper'>Whitepaper</Link></li>
        <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/contact'>Contact us </Link></li>
        <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/Signin'>Sign in</Link></li>
    </ul>
   </div>

   
</nav>
</div>

</>
  )
}
;
