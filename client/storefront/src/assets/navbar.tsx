import { ReactElement, useState, useRef } from "react";
import './navbar.css'
import DropDown from "./dropdown";
import useOnHover from "../hooks/onHover";

const NavBar: React.FC = (): ReactElement => {
    const dropDownRef = useRef<HTMLInputElement>(null)
    const [isDropDownVisible, setDropDownVisible] = useState(false)

    const closeHoverMenu = () => {
        setDropDownVisible(false)
    }

    useOnHover(dropDownRef, closeHoverMenu)
    
    return (
        <nav className="navbar" ref={dropDownRef}>
            <nav className="inner-navbar">
                <ul onMouseOver={ () => setDropDownVisible(true)} >New Arrivals</ul>
                <ul onMouseOver={ () => setDropDownVisible(true)} >Women</ul>
                <ul onMouseOver={ () => setDropDownVisible(true)} >Men</ul>
                <ul onMouseOver={ () => setDropDownVisible(true)} >Accessories</ul>
            </nav>
            {isDropDownVisible && <DropDown />}
        </nav>
    )
}

export default NavBar;