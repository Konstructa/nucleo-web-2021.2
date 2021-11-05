import React from 'react'
import './Footer.css'

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className = 'footerSection'>
            <div className = 'footerAbout'>
                <div className = 'footerTitle'>
                    <a href = '#'><h2><span style = {{color: 'orange'}}>Travel</span>now</h2></a>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div className = 'footerClasses'>
                    <div className ="infosFooter">
                        <h5>Tour</h5>
                        <a href = "#"><p>Thiland</p></a>
                        <a href = "#"><p>Canada</p></a>
                        <a href = "#"><p>Korea</p></a>
                        <a href = "#"><p>Italy</p></a>
                    </div>
                    <div className ="infosFooter">
                        <h5>Support</h5>
                        <a href = "#"><p>Account</p></a>
                        <a href = "#"><p>Legal</p></a>
                        <a href = "#"><p>Contact</p></a>
                        <a href = "#"><p>Privacy policy</p></a>
                    </div>
                    <div className ="infosFooter">
                        <h5>Userful Page</h5>
                        <a href = "#"><p>Deals</p></a>
                        <a href = "#"><p>FAQs</p></a>
                        <a href = "#"><p>Why Us</p></a>
                    </div>
                </div>
            </div>
            <div className = 'footerOrange'>
                <p>{`@ 2020 · ${year} · All rights reserved.`}</p>
            </div>
        </div>
    )
}
