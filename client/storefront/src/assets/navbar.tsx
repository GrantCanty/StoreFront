import { ReactElement, useState, useRef } from "react";
import './navbar.css'
import DropDown from "./dropdown";
import useOnHover from "../hooks/onHover";
import { Link } from "react-router-dom";

const NavBar: React.FC = (): ReactElement => {
    const dropDownRef = useRef<HTMLInputElement>(null)
    const [isDropDownVisible, setDropDownVisible] = useState(false)

    const closeHoverMenu = () => {
        setDropDownVisible(false)
    }

    useOnHover(dropDownRef, closeHoverMenu)
    
    return (
        <nav id="menu" className="navbar">
            <nav className="inner-navbar">
                <ul className="navbar-items">
                    <li className="navbar-item" onMouseOver={ () => setDropDownVisible(true)}>
                        <Link to='/'>New Arrivals</Link>
                    </li>
                    <li className="navbar-item" onMouseOver={ () => setDropDownVisible(true)} >
                        <Link to='/'>Women</Link>
                        {/*<DropDown />*/}
                    </li>
                    <li className="navbar-item" onMouseOver={ () => setDropDownVisible(true)} >
                        <Link to='/'>Men</Link>
                    </li>
                    <li className="navbar-item" onMouseOver={ () => setDropDownVisible(true)} >
                        <Link to='/'>Accessories</Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default NavBar;