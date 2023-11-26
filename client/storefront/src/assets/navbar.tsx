import { ReactElement, useState } from "react";
import '../styles/navbar.css'
import DropDown from "./dropdown";
import { Link, Outlet } from "react-router-dom";

const NavBar: React.FC = (): ReactElement => {

    const arr: boolean[] = Array<boolean>(4)
    const [isDropDownVisible, setDropDownVisible] = useState<Array<boolean>>(arr)

    const mouseOn = (id: number) => {
        let arr: boolean[] = Array<boolean>(4)
        arr[id] = true
        setDropDownVisible(arr)
    }

    const mouseOff = (id: number) => {
        let arr: boolean[] = Array<boolean>(4)
        arr[id] = false
        setDropDownVisible(arr)
    }
    
    return (
        <>
        <nav id="menu" className="navbar">
            <nav className="inner-navbar">
                <ul className="navbar-items">
                    <li className="navbar-item" onMouseOver={ () => mouseOn(0) } onMouseLeave={ () => mouseOff(0) }>
                        <Link to='/shop' state={{category: "new arrivals"}} >New Arrivals</Link>
                        <DropDown show={isDropDownVisible[0]} />
                    </li>
                    <li className="navbar-item" onMouseOver={ () => mouseOn(1) } onMouseLeave={ () => mouseOff(1) }>
                        <Link to='/shop' state={{gender: "women"}} >Women</Link>
                        <DropDown show={isDropDownVisible[1]} />
                    </li>
                    <li className="navbar-item" onMouseOver={ () => mouseOn(2) } onMouseLeave={ () => mouseOff(2) }>
                        <Link to='/shop' state={{gender: "men"}} >Men</Link>
                        <DropDown show={isDropDownVisible[2]} />
                    </li>
                    <li className="navbar-item" onMouseOver={ () => mouseOn(3) } onMouseLeave={ () => mouseOff(3) }>
                        <Link to='/shop' state={{category: "accessories"}} >Accessories</Link>
                        <DropDown show={isDropDownVisible[3]} />
                    </li>
                </ul>
            </nav>
        </nav>
        
        <Outlet />
        </>
    )
}

export default NavBar;