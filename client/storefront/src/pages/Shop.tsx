import { ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAppTitle from "../hooks/useAppTitle";
import { Gender, Products, } from '../types/enums';

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
    const nav = useNavigate();

    //const [categoryInfo, setCategoryInfo] = useState<string>(category)
    //const [genderInfo, setGenderInfo] = useState<string>(gender)
    
    return (
    <>
        <h1><Link to='/' >{props.storeName}</Link> { isEmpty(gender) ? null : <Link to='/shop' state={{gender: gender}} >/ {gender}</Link> }  </h1>
        <button onClick={ () => { nav('/shop', { state: {category: Products.ALL, gender: gender }} ) } }>{isEmpty(category) ? "Category" : category}</button>
        <button onClick={ () => { nav('/shop', { state: {category: category, gender: Gender.U }} ) } }>{isEmpty(gender) ? "Unisex" : gender}</button>

        <ul>
            <li>
                {/*<Link to='/shop/1'>Item 1</Link>*/}
            </li>
            <li>
                {/*<Link to='/shop/2'>Item 2</Link>*/}
            </li>
        </ul>
    </>
    )
}

export default Shop;