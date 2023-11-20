import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

const Shop: React.FC = (): ReactElement => {
    const location = useLocation()
    const {category, gender} = location.state
    
    return (
    <>
        <Link to='/' >Shop</Link>
        <h4>category: {category}</h4>
        <h4>gender: {gender}</h4>
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