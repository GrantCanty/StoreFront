import { MapDetails } from "../types/mapDetails";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";
import { useState } from "react";

interface Props {
    categoryData: Map<string, MapDetails>
}

const NavbarItemsList: React.FC<Props> = (props) => {
    const arr: boolean[] = Array<boolean>(4)
    const [isDropDownVisible, setDropDownVisible] = useState<Array<boolean>>(arr)

    const mouseOn = (id: number) => {
        let arr: boolean[] = Array<boolean>(4)
        arr[id] = true
        setDropDownVisible(arr)
    }

    const mouseOff = () => {
        let arr: boolean[] = Array<boolean>(4)
        setDropDownVisible(arr)
    }
    
    return (
        <ul className="navbar-items">
            {
                Array.from(props.categoryData.keys()).map((key: string, pos: number) => {
                    return (
                        <li key={key} className="navbar-item" onMouseOver={ () => mouseOn(pos) } onMouseLeave={ () => mouseOff()} >
                            <Link to='/shop' state={key} >{key}</Link>
                            <DropDown show={isDropDownVisible[pos]} products={props.categoryData.get(key)?.products} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavbarItemsList;
/*
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
*/