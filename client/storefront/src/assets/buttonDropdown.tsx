import { ReactElement } from "react";

interface Props {
    dropDownItems: string[]
    show: boolean
}

const ButtonDropDown: React.FC<Props> = (props): ReactElement => {
    let disp: string
    props.show ? disp = "block" : disp = "none"

    return (
        <div style={{"display": disp, "position": "absolute"}}>
            <ul>
                {props.dropDownItems.map((str: string, i: number) => {
                    return <li key={i}>{str}</li>
                })}
            </ul>
        </div>
    )
}

export default ButtonDropDown;