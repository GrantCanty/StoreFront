import { ReactElement, useState } from "react";
import Button from "./button";
import { Products, Gender } from "../types/enums";
import '../styles/buttoncontainer.css'

interface Props {
    category: string
    gender: string
}

const ButtonContainer: React.FC<Props> = (props): ReactElement => {
    const arr: boolean[] = Array<boolean>(2)
    const [isDropDownVisible, setDropDownVisible] = useState<Array<boolean>>(arr)

    const onClick = (id: number) => {
        if (isDropDownVisible[id]) {
            let arr: boolean[] = Array<boolean>(2)
            setDropDownVisible(arr)
        }
        else {
            arr[id] = true
            setDropDownVisible(arr)
        }
    }
    
    return (
        <div className="button-container">
            <div className="button-wrapper">
                <Button
                    text={props.category}
                    redirectLink="/shop" 
                    dropDownItems={Object.values(Products)}
                    show={isDropDownVisible[0]}
                    click={onClick}
                    position={0}
                    category={props.category}
                    gender={props.gender}
                />
            </div>
            <div className="button element">
                <Button
                    text={props.gender}
                    redirectLink="/shop" 
                    dropDownItems={Object.values(Gender)}
                    show={isDropDownVisible[1]}
                    click={onClick}
                    position={1}
                    category={props.category}
                    gender={props.gender}
                /> 
            </div> 
        </div>
    )
}

export default ButtonContainer;