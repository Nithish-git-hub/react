import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className='alldata'>
        <h1>RHEO RESTAURANT</h1>
        <div className='navbar'>
          <Link to="/recepies" className="nav-link"><div>Recepies</div></Link>
          <div className='icons'>
            <Link to="/cart" className='cart'><FaCartPlus /></Link>
            <Link to="/wishlist" className='wishlist'><FaHeart /></Link>
          </div>


        </div>

      </div>
       <div className='image'>
              
            </div>
            
    </div>
  )
}

export default Navbar