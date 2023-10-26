// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./styles/styles.css"; // Zaimportuj nasze style

interface NavbarProps {
    isMenuOpen: boolean;
    closeMenu: () => void;
    toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, closeMenu, toggleMenu}) => {
    return (
        <div className="navbar">
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={32} />
            <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
                <Link to="/" onClick={closeMenu}>
                    Home
                </Link>
                <Link to="/about" onClick={closeMenu}>
                    About
                </Link>
                <Link to="/projects" onClick={closeMenu}>
                    Projects
                </Link>
                {/*<Link to="/admin" onClick={closeMenu}>*/}
                {/*    Panel admina*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default Navbar;
