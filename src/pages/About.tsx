import React from 'react';
import './styles/about.css';

const About = () => {

    return (
        <div className="about">
            <div className="darkgrey"></div>
            <div className="aboutdiv">
                <div className="abouttext">
                    About me
                </div>
                <div className="about-container">
                    <div className="first-text">
                        <div className="first-text1">
                            Hello!
                        </div>
                        <div className="first-text2">
                            My name is Patrycja Grodzka and I am from Poland. I got my start as a graphic designer by creating digital art in 2017. Today, I am open to all kinds of design work, although I am always drawn to passion projects that let me go back to my digital art roots. I work on programs such as Figma, Canva, Blender etc.
                        </div>
                        <div className="second-text">
                            In my free time, I paint on canvas, draw and read crime books. If you like my work, please contact me. I can’t wait to learn about your brand’s design needs.
                        </div>
                    </div>
                </div>
                <div className="homebottomtext-mobile">
                    Creativity is intelligence having fun. Albert Einstein
                </div>
                <div className="aboutbottom">
                    <a href="https://www.instagram.com/justpartof_art/?hl=pl" target="_blank" rel="noopener noreferrer"><img className="insta" src="png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png" alt="img" /></a>
                    <div className="homebottomtext">
                        Creativity is intelligence having fun. Albert Einstein
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
