import { ReactElement } from "react";
import './navbar.css'

const NavBar: React.FC = (): ReactElement => {
    return (
        <nav className="navbar">
            <nav className="inner-navbar">
                <ul>New Arrivals</ul>
                <ul>Women</ul>
                <ul>Men</ul>
            </nav>

        </nav>
    )
}

export default NavBar;