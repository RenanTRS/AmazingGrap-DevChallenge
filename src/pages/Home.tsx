import { Header } from "../components/Header";
import team from "../assets/images/team.svg";

export function Home(){
    return (
        <>
            <Header />
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
