import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/magazine_logo.png';

export default function Navbar(){
    
    return (
        
        <nav className="nav-bar">
           <img src={logo}  className="logo" alt="Logo of a minimalistic style book"></img>
            <ul>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/campus">Campus</ActiveLink>
            <ActiveLink to="/sport">Sport</ActiveLink>
            <ActiveLink to="/activities">Activities</ActiveLink>
            <ActiveLink to="/advice">Advice</ActiveLink>
            </ul>
        </nav>
    )
}

function ActiveLink ({to, children,...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}