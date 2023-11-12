import { ReactElement } from "react";
import './dropdown.css'

interface DropDownProps {
    show: boolean
}

const DropDown: React.FC<DropDownProps> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"
    
    return (
            <div className="dropdown" style={{"display": disp}}>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
    )
}

export default DropDown;