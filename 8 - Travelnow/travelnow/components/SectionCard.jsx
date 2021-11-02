import React from 'react'
import Cards from './Cards'
import './Card.css'
import moutains from './images/Mountains.jpg'
import desert from './images/Desert.jpg'
import camping from './images/CampingC.jpg'

export default function SectionCard() {
    return (
        <div className = 'sectionCard'>
            <Cards img = {moutains} title = 'Travel in Moutains'/>
            <Cards img = {desert} title = 'Travel to Desert'/>
            <Cards img = {camping} title = 'Camping in Mountains'/>
        </div>
    )
}
