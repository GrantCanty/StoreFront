import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../assets/navbar";

const Shop: React.FC = (): ReactElement => {
    return (
    <>
        <h1>Shop</h1>
        <Link to='/shop/1'>Item 1</Link>
        <Link to='/shop/2'>Item 2</Link>
    </>
    )
}

export default Shop;