import React from 'react'
import '../style.css'
import logo from '../logo.jpeg'


export default function Header() {
  return (
    <div>
        <header className='header'>
          <img src={logo} alt='img' className='header-img'/>
          <h2 className='header-title'>Meme Generator</h2>
          <h4 className='header-project'>React Course - Project 3</h4>
        </header>
     
    </div>
  )
}
