import { ReactElement } from "react";
import '../styles/dropdown.css'
import { Link } from "react-router-dom";

interface DropDownProps {
    products: Map<string, string[]>
    show: boolean
}

const DropDown: React.FC<DropDownProps> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"
    
    return (
            <div className="dropdown" style={{"display": disp}}>
                <div className="dropdown-inner">
                    {
                        Array.from(props.products.keys()).map((prodHeading: string, i: number) => {
                            return (
                            <ul>
                                <li key={prodHeading + i} className="heading" >{prodHeading}</li>
                                {props.products.get(prodHeading)?.map((prod: string) => {
                                    return <li key={prod}> <Link to='/shop'>{prod}</Link></li>
                                })}
                            </ul>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default DropDown;

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