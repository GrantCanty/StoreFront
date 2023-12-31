import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAppTitle from "../hooks/useAppTitle";

interface Props {
    storeName: string
}

function isEmpty(s: string): boolean {
    if (s === undefined) {
        return true
    }
    else {
        return s.length === 0
    }
}

const Shop: React.FC<Props> = (props): ReactElement => {
    useAppTitle(`Shop | ${props.storeName}`)

    const location = useLocation()
    const {category, gender} = location.state

    const [categoryInfo, setCategoryInfo] = useState<string>(category)
    const [genderInfo, setGenderInfo] = useState<string>(gender)
    
    return (
    <>
        <h1><Link to='/' >{props.storeName}</Link> { isEmpty(genderInfo) ? null : <Link to='/shop' state={{gender: genderInfo}} >/ {genderInfo}</Link> }  </h1>
        <button onClick={ () => setCategoryInfo("")} >{isEmpty(categoryInfo) ? "Category" : categoryInfo}</button>
        <button onClick={ () => setGenderInfo("") } >{isEmpty(genderInfo) ? "Unisex" : genderInfo}</button>
        <ul>
            <li>
                <Link to='/shop/1'>Item 1</Link>
            </li>
            <li>
                <Link to='/shop/2'>Item 2</Link>
            </li>
        </ul>
    </>
    )
}

export default Shop;