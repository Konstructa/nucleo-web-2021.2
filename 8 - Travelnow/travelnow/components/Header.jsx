import React from 'react'
import './Header.css'
import Navbar from '../components/Navbar'


export default function Header() {
    return (
        <div>
            <header>
                <h1><span style = {{color: 'orange'}}>Travel</span>now</h1>
                <Navbar/>
                <button>Book A Tour</button>
            </header>
        </div>
    )
}

