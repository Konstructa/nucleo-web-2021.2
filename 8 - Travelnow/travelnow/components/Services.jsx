import React from 'react'
import image from './images/camping.jpg'
import ticket from  './images/ticket.svg'
import airplane from './images/plane.svg'
import car from './images/car.svg'
import './Service.css'

export default function Services() {

    const information = [
        {img: ticket, title: 'Ticket'}, {img: car, title: 'Drive'}, {img: airplane, title: 'Tour'}
    ]

    const informationList = information.map(info =>(
        <div className = 'areaServices'>
            <div className = 'ticket'>
                <img src = {info.img}/>
            </div>
            <div className = 'areaInfo'>
                <h3>{info.title}</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            </div>
        </div>

    ))
    
    return (
        <div className = 'serviceSection'>
           <img src = {image} className = 'serviceImg'/>
           <div className = 'infoService'>
                <h1>Our Quality Services</h1>
                {informationList}
           </div>
        </div>
    )
}
