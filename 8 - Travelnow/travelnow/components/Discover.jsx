import React from 'react'
import './Discover.css'
import image from './images/carbagage.jpg'

export default function Discover() {
    return (
        <div className = 'discoverSection' id = 'sec1'>
            <div className = 'inforDiscover'>
                <h1>Find your next place to travel</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type.</p>
                <div className = 'inputBtn'>
                    <input type = 'text' placeholder = "Burj khalifa, Dub" style = {{color: 'orange'}}/>
                    <button className = 'btnSearch'>Search</button>
                </div>
            </div> 
            <img src = {image}/>
        </div>
    )
}
