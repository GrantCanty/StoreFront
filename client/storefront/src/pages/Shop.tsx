import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Shop: React.FC = (): ReactElement => {
    const location = useLocation()
    const {category, gender} = location.state

    const [categoryInfo, setCategoryInfo] = useState<string>(category)
    const [genderInfo, setGenderInfo] = useState<string>(gender)
    
    return (
    <>
        <h1><Link to='/' >Shop</Link></h1>
        <h4>category: {categoryInfo}</h4>
        <h4>gender: {genderInfo}</h4>
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