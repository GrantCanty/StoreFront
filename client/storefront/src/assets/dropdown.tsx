import { ReactElement } from "react";
import '../styles/dropdown.css'
import { Link } from "react-router-dom";

interface DropDownProps {
    show: boolean
}

const DropDown: React.FC<DropDownProps> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"
    
    return (
            <div className="dropdown" style={{"display": disp}}>
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
            </div>
    )
}

export default DropDown;