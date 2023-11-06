import React from 'react'
import './cmp1.css'
export default function Cmp1() {
  return (
    <>
      <div className='img'>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <span className="logo-text">LOGO</span>
            </div>
            <ul className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">Models</a></li>
              <li><a href="/">Register as a Model</a></li>
              <li><a href="/">Hire as a Model</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
            <div className="buttons">
              <button className="login">Login</button>
              <button className="register">Register</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}