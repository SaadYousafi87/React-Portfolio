import React from 'react';
import Link from 'react-router-dom';

export default function header(){
    return (
        <header className='bg-info text-dark mb-4 py-3 display-flex align-center'>
            <div className='container flex-column justify-space-between-lg justify-center align-center text-center'>
                <Link className="text-dark" to="/">
                    <h1 className='m-0' style={{fontSize: '3rem'}}>About me</h1>
                </Link>
                <Link className="text-dark" to="/">
                    <h1 className='m-0' style={{fontSize: '3rem'}}>Portfolio</h1>
                </Link>
                <Link className="text-dark" to="/">
                    <h1 className='m-0' style={{fontSize: '3rem'}}>Contact me</h1>
                </Link>
                <Link className="text-dark" to="/">
                    <h1 className='m-0' style={{fontSize: '3rem'}}>Resume</h1>
                </Link>
            </div>
        </header>
    );
}