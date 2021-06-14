import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
    return ( 
    <div>
    <div className="container md:flex justify-between mx-auto">
        <nav className="flex">
            <NavLink className='inline-flex item-center py-6 px-3'
 to='/'>Home</NavLink>
            <NavLink className='inline-flex item-center py-6 px-3' to='/about'>About Me</NavLink>
            <NavLink className='inline-flex item-center py-6 px-3' to='/work'>My Projects</NavLink>
            <NavLink className='inline-flex item-center py-6 px-3' to='/contact'>Contact Me</NavLink>
        </nav>
    </div>
</div>
    )
}