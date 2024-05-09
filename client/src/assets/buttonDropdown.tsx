import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ShopDetails } from "../types/mapDetails";

interface Props {
    dropDownItems: string[]
    show: boolean
    dropDownLinks: ShopDetails[]
    redirectLink: string
    click: (i: number) => void
    position: number
}

const ButtonDropDown: React.FC<Props> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"

    return (
        <div className="button-dropdown" style={{"display": disp}}>
            <ul>
                {props.dropDownItems.map((str: string, i: number) => {
                    /*console.log(str, props.dropDownLinks[i])*/
                    return  <li key={i}>
                                <Link to={'/shop'} state={props.dropDownLinks[i]} onClick={ () => props.click(props.position)} >{str}</Link>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default ButtonDropDown;