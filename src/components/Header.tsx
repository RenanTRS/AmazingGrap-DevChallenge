import React from "react";

import "../styles/header.scss";

export function Header(){
    function showMenu(){
        //const menu = document.querySelector(".menu-section nav");
        const menuToggle = document.querySelector(".menu-toggle");
        
        menuToggle?.classList.toggle('on');
        
    }

    return (
        <>
            <header>
                <h2>DevChallenge</h2>
                <section className="menu-toggle">
                    <div>
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#test">Home</a></li>
                            <li><a href="#test">Features</a></li>
                            <li><a href="#test">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    );
}