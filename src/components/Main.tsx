import React from "react";

import "../styles/main.scss";
import team from "../assets/images/team.svg";

export function Main(){
    function hideMenu(){
        const body = document.querySelector("body");
        const menu = document.querySelector(".menu-section nav");
        const menuToggle = document.querySelector(".menu-toggle");
        const main = document.querySelector('main');

        body?.classList.remove('no-scroll');
        menuToggle?.classList.remove('on');
        menu?.classList.remove('active');
        main?.classList.remove('toggle');
    }

    return (
        <>
            <main onClick={hideMenu}>
                <img src={team} alt="Team" />
                <section>
                    <strong>Create amazing graphics</strong>
                    <p>Colaborate and create beautiful graphics with your team.</p>
                </section>
                <a href="#teste">Start now</a>    
            </main>
        </>
    );
}