import React from 'react'
import stars from './images/stars.svg'


export default function Cards(props) {
    return (
        <div className = 'card'>    
            <img src = {props.img} className = 'cardImg'/>
            <div className = 'infoCard'>
                <h4>{props.title}</h4>
                <img src = {stars}/>
                <p>$6000</p>
            </div>
        </div>
    )
}
