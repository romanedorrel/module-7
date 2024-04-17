import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return(
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}