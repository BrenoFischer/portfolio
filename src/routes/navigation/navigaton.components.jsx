import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className="nav">
                <ul className="nav-links">
                    <Link className="nav-link" to='/projects'>
                        Home
                        <div className="nav-link-border"></div>
                    </Link>
                    <Link className="nav-link" to='/projects'>
                        Projects
                        <div className="nav-link-border"></div>
                    </Link>
                    <Link className="nav-link" to='/about'>
                        About
                        <div className="nav-link-border"></div>
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact me
                        <div className="nav-link-border"></div>
                    </Link>
                </ul>
            </div>
            <Outlet />
        </>
    );
}


export default Navigation;