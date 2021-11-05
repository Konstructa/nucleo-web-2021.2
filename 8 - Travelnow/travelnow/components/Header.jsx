import React, {useState} from 'react'
import './Header.css'
import Navbar from '../components/Navbar'


export default function Header() {


    const [click, setClick] = useState(false);
    const handleClick = () => {setClick
        (!click); updateBodyStyles()}

        

    function updateBodyStyles() {
        if (click == false) {
            document.getElementById('body').style.overflow = "hidden";
        } else {
            document.getElementById('body').style.overflow = "visible";
        }
    }

    return (
        <div>
            <header>
               <a href = '#'><h2><span style = {{color: 'orange'}}>Travel</span>now</h2></a>
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <Navbar classe = {click ? 'active' : ''}/>
            </header>
        </div>
    )
}

