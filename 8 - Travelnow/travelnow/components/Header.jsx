import React from 'react'
import './Header.css'
import Navbar from '../components/Navbar'

let textButton = {text1: 'Book A Tour', text2: 'Search'}

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

