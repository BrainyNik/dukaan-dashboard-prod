import React from 'react'
import { chatIcon, downArrowIcon, HelpIcon, searchIcon } from '../icon-imports'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="nav-header">
            <p>Payments</p>
            <p><img src={HelpIcon} alt="Help" /> How it works</p>
        </div>
        <div className="nav-search search">
            <button><img src={searchIcon} alt="Search" /></button>
            <input type="text" placeholder='Search features, tutorials,' />
        </div>
        <div className="function-btns">
            <div className="function-btn-icon"><img src={chatIcon} alt="Chat" /></div>
            <div className="function-btn-icon"><img src={downArrowIcon} alt="Down" /></div>
        </div>
    </div>
  )
}

export default Navbar