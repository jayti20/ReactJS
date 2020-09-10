 import React from 'react'
 import './navStyles.css'
 import {Link} from 'react-router-dom'
 function Nav() {
     const navstyle={
         color:'white'
     }
     return (
         <div className='primary'>
             <h3>Logo</h3>
             <ul className="nav-links">
             <Link style={navstyle} to='/about'>
             <li>About</li>
             </Link>
             <Link style={navstyle} to='/shop'>
             <li>Shop</li>
             </Link>
             
             </ul>
         </div>
     )
 }
 
 export default Nav
 