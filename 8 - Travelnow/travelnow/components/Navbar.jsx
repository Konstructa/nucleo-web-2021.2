import React from 'react'

export default function Navbar(props) {
    return (
        
        <div className = 'Nav' id = {props.classe}>
            <ul>
                <li style = {{color: 'orange'}}>Discover</li>
                <li>Destination</li>
                <li>About us</li>
            </ul>
            <button className = 'btnNav'>Book A Tour</button>
        </div>
        
    )
}
