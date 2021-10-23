import team from "../assets/images/team.svg";

export function Home(){
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
            <main>
                <img src={team} alt="" />
                <section>
                    <strong>Create amazing graphics</strong>
                    <p>Colaborate and create beautiful graphics with your team.</p>
                </section>
                <a href="https://www.google.com.br" target="_blank" rel="noreferrer">Start now</a>
                
            </main>
        </>
    );
}