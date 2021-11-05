import React from 'react'

export default function Navbar(props) {
    return (    
        <div className = 'Nav' id = {props.classe}>
            <ul>
                <a href = '#sec1'><li style = {{color: 'orange'}}>Discover</li></a>
                <a href = '#sec2'><li>Destination</li></a>
                <a href = '#sec4'><li>About us</li></a>
            </ul>
            <a href = '#sec3'><button className = 'btnNav'>Book A Tour</button></a>
        </div>
        
    )
}
