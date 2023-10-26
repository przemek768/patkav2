import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import AdminPanel from "./pages/AdminPanel";
import LoadingIndicator from "./components/LoadingIndicator";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App: React.FC = () => {

    function refreshPage(){
        setTimeout(function(){
            window.location.reload();
        }, 0.2000);
    }

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        refreshPage();
    };

    return (
        <Router>
            <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} toggleMenu={toggleMenu} />
            <Container fluid className="mt-4">
                <Suspense fallback={<LoadingIndicator />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/admin" element={<AdminPanel />} />
                    </Routes>
                </Suspense>
            </Container>
        </Router>
    );
};

export default App;
