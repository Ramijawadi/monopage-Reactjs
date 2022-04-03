import React from 'react'
import Navbar from './Navbar'
function Header() {
  return (
    <div id='main'>
    <Navbar />
    <div className='name'>
    <h1><span>Launch Your App</span><br/> with <span>C</span>onfidence And <span>C</span>reativity ...</h1>
     <p className='details'>  our company is in your services you are welcome every body , we will helps you to create a perfect web site</p>
  <a href='#' className='cv-btn' >Download</a>

    </div>
    </div>
  )
}

export default Header