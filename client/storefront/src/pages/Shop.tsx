import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Shop: React.FC = (): ReactElement => {
    return (
    <>
        <Link to='/' >Shop</Link>
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