import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    dropDownItems: string[]
    show: boolean
}

const ButtonDropDown: React.FC<Props> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"

    const nav = useNavigate()

    return (
        <div style={{"display": disp, "position": "absolute"}}>
            <ul>
                {props.dropDownItems.map((str: string, i: number) => {
                    return <li 
                        key={i}
                        onClick={ () => nav("/shop", { state: {category: "Jeans", gender: "Men"} }) }> {str} </li>
                })}
            </ul>
        </div>
    )
}

export default ButtonDropDown;