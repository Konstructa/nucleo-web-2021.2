import React from 'react'

export default function Navbar() {
    return (
        <div className = 'Nav'>
            <ul>
                <li style = {{color: 'orange'}}>Discover</li>
                <li>Destination</li>
                <li>About us</li>
            </ul>
            <button className = 'btnNav'>Book A Tour</button>
        </div>
        
    )
}
