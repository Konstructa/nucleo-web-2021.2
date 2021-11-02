import React from 'react'
import './Destination.css'
import image from './images/travel.jpg'


export default function Destination(props) {
    return (
        <div className = 'destinationSection'>
            <img src = {image}/>
            <div className = 'infoDestination'>
                <h1>Travel to any corner of the World</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type.</p>
                <div>
                    <div className = 'infoNumber'>
                       <p><span className = 'spanNumber'>20</span> Years Experience</p> 
                       <p><span className = 'spanNumber'>55</span> Destination Collaboration</p> 
                       <p><span className = 'spanNumber'>600+</span> Tourist Destination</p> 
                    </div>
                    <button className = 'btnBlue'>Explore Destination</button>
                </div>
                
            </div>
        </div>
    )
}
