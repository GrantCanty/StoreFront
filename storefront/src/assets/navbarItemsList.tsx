import { MapDetails, ShopDetails } from "../types/mapDetails";
import { Link } from "react-router-dom";
import NavBarDropDown from "./navbarDropdown";
import { useState } from "react";

interface Props {
    categoryData: Map<string, MapDetails>
}

const NavbarItemsList: React.FC<Props> = (props) => {
    const arr: boolean[] = Array<boolean>(6)
    const [isDropDownVisible, setDropDownVisible] = useState<Array<boolean>>(arr)

    const mouseOn = (id: number) => {
        let arr: boolean[] = Array<boolean>(6)
        arr[id] = true
        setDropDownVisible(arr)
    }

    const mouseOff = () => {
        let arr: boolean[] = Array<boolean>(6)
        setDropDownVisible(arr)
    }
    
    return (
        <ul className="navbar-items">
            {
                Array.from(props.categoryData.keys()).map((key: string, pos: number) => {
                    let prods = props.categoryData.get(key)?.products
                    return (
                        <li key={key} className="navbar-item" onMouseOver={ () => mouseOn(pos) } onMouseLeave={ () => mouseOff()} >
                            <Link className="navbar-item-inner" to='/shop' state={props.categoryData.get(key)?.filters} >{key}</Link>
                            <NavBarDropDown key={pos+100} show={isDropDownVisible[pos]} products={prods !== undefined ? prods : new Map<string, Map<string, ShopDetails>>()} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavbarItemsList;