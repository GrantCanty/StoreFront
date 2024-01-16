import { ReactElement, useState } from "react";
import { ShopDetails } from "../types/mapDetails"
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    text: string
    hoverText: string
    redirectLink: string
    newState: ShopDetails
    dropDownItems: string[]
}

const Button: React.FC<ButtonProps> = (props): ReactElement => {
    const nav = useNavigate()

    const [text, setText] = useState<string>(props.text)


    return (
            <button 
                onClick={ () => {nav(props.redirectLink, { state: props.newState } )}}
                /*onMouseEnter={ () => setText(props.hoverText)}
                onMouseLeave={ () => setText(props.text)}*/>
                    {text}
            </button>
    )
}

export default Button;