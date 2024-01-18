import { ReactElement, useState } from "react";
import { ShopDetails } from "../types/mapDetails"
import ButtonDropDown from "./buttonDropdown";
//import { useNavigate } from "react-router-dom";

interface ButtonProps {
    text: string
    redirectLink: string
    dropDownItems: string[]
}

const Button: React.FC<ButtonProps> = (props): ReactElement => {
    //const nav = useNavigate()
    const [show, setShow] = useState<boolean>(false);

    function newShow() {
        setShow(!show)
    }

    return (
            <>
                <button onClick={ () => newShow() }>
                    {props.text}
                </button>
                <ButtonDropDown dropDownItems={props.dropDownItems} show={show}/>
            </>
    )
}

export default Button;