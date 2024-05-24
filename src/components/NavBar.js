import { Link } from "react-router-dom";
import './NavBar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/messages">M</Link>
            <Link to="/match">C</Link>
            <Link to="/friends">F</Link>
            <Link to="/">P</Link>
        </div>
    );
}

export default Navbar;
