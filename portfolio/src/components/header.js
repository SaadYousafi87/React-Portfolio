import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

function Header() {
    return (
        <>
            <Link to="/" id="myname">Saad</Link>
            <Navbar/>
        </>
    );
}

export default Header;