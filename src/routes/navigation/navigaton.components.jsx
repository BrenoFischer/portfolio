import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';

const NavLink = ({title}) => {
    return (
        <Link className="nav-link" to='/projects'>
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
                    <NavLink title={"Home"} />
                    <NavLink title={"Projects"} />
                    <NavLink title={"About"} />
                    <NavLink title={"Contact me"} />
                </ul>
            </div>
            <Outlet />
        </>
    );
}


export default Navigation;