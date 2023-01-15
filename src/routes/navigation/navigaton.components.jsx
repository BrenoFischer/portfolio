import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';

const NavLink = ({title, sectionId}) => {
    const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } 
    }

    return (
        <Link className="nav-link" onClick={scrollToSection}>
            {title}
            <div className="nav-link-border"></div>
        </Link>
    );
}

const Navigation = () => {
    return (
        <>
            <div className="nav">
                <ul className="nav-links">
                    <NavLink title={"Projects"} sectionId="projects" />
                    <NavLink title={"About"} sectionId="about" />
                    <NavLink title={"Contact me"} sectionId="contact" />
                </ul>
            </div>
            <Outlet />
        </>
    );
}


export default Navigation;