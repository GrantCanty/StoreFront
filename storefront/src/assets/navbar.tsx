import { ReactElement } from "react";
import '../styles/navbar.css'
import { Outlet } from "react-router-dom";
import { MapDetails } from "../types/mapDetails";
import NavbarItemsList from "./navbarItemsList";

interface Props {
    categoryData: Map<string, MapDetails>
}

const NavBar: React.FC<Props> = (props): ReactElement => {
    return (
        <>
        <nav id="menu" className="navbar">
            <nav className="inner-navbar">
                <NavbarItemsList categoryData={props.categoryData} />
            </nav>
        </nav>
        
        <Outlet />
        </>
    )
}

export default NavBar;