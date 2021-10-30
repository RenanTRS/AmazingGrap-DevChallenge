import React from "react";

import "../styles/header.scss";

export function Header(){
    function showMenu(){
        //const body = document.querySelector('body');
        const menu = document.querySelector(".menu-section nav");
        const menuToggle = document.querySelector(".menu-toggle");
        
        menuToggle?.classList.add('on');
        menu?.classList.add('active');
        //body?.classList.toggle('no-scroll');
        
        const main = document.querySelector('main');
        main?.classList.add('toggle');
    }
    function backMenu(){
        //const back = document.querySelector('.back-toggle');
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu-section nav');
        const main = document.querySelector('main');

        menuToggle?.classList.remove('on');
        menu?.classList.remove('active');
        main?.classList.remove('toggle');
    }

    return (
        <>
            <header>
                <h2>DevChallenge</h2>
                <section className="menu-section">
                    <div onClick={showMenu} className="menu-toggle">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                    </div>
                    <nav>
                        <div onClick={backMenu} className="back-toggle">
                            <span className="back-one"></span>
                            <span className="back-two"></span>
                        </div>
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