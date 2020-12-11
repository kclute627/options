import React from 'react'

const Header = () => {
    return (
        <div className='header'>

            <div className="header__left">
                <div className="header__left-1">
                    Option Buddy
                </div>
            </div>

            <div className="header__right">
                <ul>
                    <li>Profile</li>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header
