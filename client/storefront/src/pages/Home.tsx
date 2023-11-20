import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): ReactElement => {
    return (
    <>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to="/shop" >New Arrivals</Link>
            </li>
            <li>
                <Link to="/shop" >Women</Link>
            </li>
            <li>
                <Link to="/shop" >Men</Link>
            </li>
            <li>
                <Link to="/shop" >Denim</Link>
            </li>
            <li>
                <Link to="/shop" >Tops</Link>
            </li>
            <li>
                <Link to="/shop" >Jeans</Link>
            </li>
            <li>
                <Link to="/shop" >Accesories</Link>
            </li>
        </ul>
    </>
    )
}

export default Home;