import React from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon" />Travel.</h1>
          </a>
        </div>

        <div className="navBar">
          
        </div>

      </header>
    </section>
  )
}

export default Navbar