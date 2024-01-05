// src/pages/Projects.tsx
import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./styles/project.css"
import insta from"../assets/img/png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png"

import image1 from "../assets/img/image1.png"
import image2 from "../assets/img/image2.png"
import image3 from "../assets/img/image3.jpg"
import image4 from "../assets/img/image4.png"
import image5 from "../assets/img/image5.png"
import image6 from "../assets/img/image6.png"
import image7 from "../assets/img/image7.png"
import image8 from "../assets/img/image8.png"
import image9 from "../assets/img/image9.png"
import image10 from "../assets/img/image10.png"
import image11 from "../assets/img/image11.png"
import image12 from "../assets/img/image12.png"
import image13 from "../assets/img/image13.png"
import image14 from "../assets/img/image14.png"
import image15 from "../assets/img/image15.png"
import image16 from "../assets/img/image16.png"
import image17 from "../assets/img/image17.jpg"
import image18 from "../assets/img/image18.jpg"
import image19 from "../assets/img/image19.jpg"
import image20 from "../assets/img/image20.png"
import image21 from "../assets/img/image21.jpg"
import image22 from "../assets/img/image22.jpg"
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22
];
const Projects = () => {

    return (
        <div className="masonry-container">
            <div className="galleryText">Gallery</div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="10px">
                    {images.map((image, index) => (
                        <div className="masonry-item" key={index}>
                            <img
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt={`Project ${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <a className="insta-fixed" href="https://www.instagram.com/justpartof_art/?hl=pl" target="_blank" rel="noopener noreferrer"><img className="insta" src={insta} alt="img" /></a>
        </div>
    );
};

export default Projects;
