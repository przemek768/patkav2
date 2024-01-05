import React, { useEffect, useRef } from "react";
import './styles/home.css';

const Home: React.FC = () => {
    const homesecondRef = useRef<HTMLDivElement | null>(null); // Określamy generyczny typ dla useRef

    useEffect(() => {
        // Po załadowaniu się komponentu, dodajemy klasę "fade-in" do elementu .homesecond
        homesecondRef.current?.classList.add("fade-in"); // Używamy optional chaining operatora "?." aby uniknąć błędu, jeśli homesecondRef.current jest null
    }, []);

    return (
        <div className="home">
            <div className="darkgrey"></div>

            <div className="homemain">
                <img className="mobile-img" src="ciemnoniebieska-fioletowa-technologiczna-aplikacja-biznesowa-str.png" alt="Obrazek" />
                <div className="homesecond" ref={homesecondRef}>
                    <div className="hometext">UI DESIGNER</div>
                    <img className="img" src="ciemnoniebieska-fioletowa-technologiczna-aplikacja-biznesowa-str.png" alt="Obrazek" />
                    <img className="pat" src="obraz-2023-10-11-143043773-1.png" alt="Patka" />
                </div>
                <div className="mobile-bottom-text">
                    Creativity is intelligence having fun. Albert Einstein
                </div>
            </div>
            <div className="homebottom">
                <a href="https://www.instagram.com/justpartof_art/?hl=pl" target="_blank" rel="noopener noreferrer"><img className="insta" src="png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png" alt="img" /></a>
                <div className="homebottomtext">
                    Creativity is intelligence having fun. Albert Einstein
                </div>
            </div>
        </div>
    );
};

export default Home;
