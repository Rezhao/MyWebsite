import { useState } from 'react';
import { Link, useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <Link to='/' className='logo'>
                Rebecca Zhao
            </Link>
            <div 
                className="menu" 
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='about'>About</CustomLink>
                <CustomLink to='projects'>Projects</CustomLink>
                <CustomLink to='contact'>Contact</CustomLink>
                <CustomLink to='resume'>Resume</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? "active" : ""}>
            <NavLink to={to} className={to} {...props}>
                {children}
            </NavLink>
        </li>
    )

}