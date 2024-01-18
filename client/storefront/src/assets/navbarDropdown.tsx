import { ReactElement } from "react";
import '../styles/dropdown.css'
import { Link } from "react-router-dom";
import { ShopDetails } from "../types/mapDetails";

interface DropDownProps {
    products: Map<string, Map<string, ShopDetails>>
    show: boolean
}

const NavBarDropDown: React.FC<DropDownProps> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"
    
    return (
            <div className="dropdown" style={{"display": disp}}>
                <div className="dropdown-inner">
                    {
                        Array.from(props.products.keys()).map((prodHeading: string, i: number) => {
                            let tmp = props.products.get(prodHeading)
                            return (
                            
                            <ul>
                                <li key={prodHeading + i} className="heading" >{prodHeading}</li>
                                { 
                                tmp !== undefined ? Array.from(tmp).map((prod: [string, ShopDetails]) => {
                                    return <li key={prod[0]}> <Link to='/shop' state={prod[1]} >{prod[0]}</Link></li>
                                }) : null}
                            </ul>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default NavBarDropDown;

/*
                    <ul>
                        <li>
                            <Link to='/shop' >item 1</Link>
                        </li>
                        <li>
                            <Link to='/shop'>item 2</Link>
                        </li>
                        <li>
                            <Link to='/shop'>item 3</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/shop' >item 1</Link>
                        </li>
                        <li>
                            <Link to='/shop'>item 2</Link>
                        </li>
                        <li>
                            <Link to='/shop'>item 3</Link>
                        </li>
                    </ul>
*/