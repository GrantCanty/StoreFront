import { ReactElement } from "react";
import ButtonDropDown from "./buttonDropdown";
import { Gender } from "../types/enums";
import { ShopDetails } from "../types/mapDetails";

interface ButtonProps {
    text: string
    redirectLink: string
    dropDownItems: string[]
    show: boolean
    click: (i: number) => void
    position: number
    category: string
    gender: string
}

const Button: React.FC<ButtonProps> = (props): ReactElement => {
    
    let dropDownLinks: ShopDetails[] = Array<ShopDetails>()
    for (let i = 0; i < props.dropDownItems.length; i++) {
        let tmp: ShopDetails = {category: '', gender: ''}
        if (props.text !== Gender.U && props.text !== Gender.W && props.text !== Gender.M) {
            
            tmp.category = props.dropDownItems[i]
            tmp.gender = props.gender
        }
        else {
            tmp.category = props.category
            tmp.gender = props.dropDownItems[i]
        }
        dropDownLinks.push(tmp)
    }

    return (
            <>
                <button onClick={ () => props.click(props.position) }>
                    {props.text}
                </button>
                <ButtonDropDown dropDownLinks={dropDownLinks} dropDownItems={props.dropDownItems} show={props.show} redirectLink={props.redirectLink} click={props.click} position={props.position} />
            </>
    )
}

export default Button;