import React from 'react';
import './Header.css'
import logo from '../../assets/shelfie_icon.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <div className='logo-content'> <img className='logo' src={logo} alt='logo'></img> </div>
            <div className='title-content'> <div className='title'>SHELFIE</div></div>

            <div className='button-content'>
                <div className='dash-btn' ><Link to='/'>Dashboard</Link></div>
                <div className='add-btn' ><Link to='/add'>Add Inventory</Link></div>
            </div>

        </div>
    )
}