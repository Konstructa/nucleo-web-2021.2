import React from 'react'
import './Header.css'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
        <div>
            <header>
                <h2><span style = {{color: 'orange'}}>Travel</span>now</h2>
                <Navbar/>
            </header>
        </div>
    )
}

