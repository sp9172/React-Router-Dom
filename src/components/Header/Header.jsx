import React, { useState } from 'react'

import {Routes,Route,Link,useLocation} from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Shop from '../Shop/Shop'

const Header = () => {

const[menu,setMenu] = useState("Home")

const location = useLocation();

React.useEffect(()=>{
    if(location.pathname ==="")setMenu("Home");
    else if(location.pathname === "/about")setMenu("About");
    else if(location.pathname === "/shop")setMenu("Shop");
    else if(location.pathname === "/contact")setMenu("Contact");
    else if(location.pathname ==="/getstart")setMenu("Get Started")
},[location.pathname])

    
  return (
    <div>
      <header>

      <nav className="navbar">
    <div className="container">
      <div className="logo">BrandName</div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className="nav-links">
        <li><Link to="" className={menu === "Home"?'active':''}>Home</Link></li>
        <li><Link to="/about" className={menu === "About"?'active':''}>About</Link></li>
        <li><Link to="/shop"  className={menu === "Shop"?'active':''}>Shop</Link></li>
        <li><Link to="/contact"  className={menu === "Contact"?'active':''}>Contact</Link></li>
        <li><Link to="#" className="btn">Get Started</Link></li>
      </ul>
    </div>
  </nav>

  <Routes>

  <Route path='' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>

 <Route path='/shop' element={<Shop/>}/>
  <Route path='/contact' element={<Contact/>}/>
   {/* <Route path='/getstart' element={<GetStart/>}/>  */}


</Routes>

      </header>
    </div>

    
  )

  
}

export default Header
