import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): ReactElement => {
    return (
    <>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to="/shop" state={{category: "new arrivals"}} >New Arrivals</Link>
            </li>
            <li>
                <Link to="/shop" state={{gender: "women"}} >Women</Link>
            </li>
            <li>
                <Link to="/shop" state={{gender: "men"}} >Men</Link>
            </li>
            <li>
                <Link to="/shop" state={{category: "denim"}} >Denim</Link>
            </li>
            <li>
                <Link to="/shop" state={{category: "tops"}} >Tops</Link>
            </li>
            <li>
                <Link to="/shop" state={{category: "jeans"}} >Jeans</Link>
            </li>
            <li>
                <Link to="/shop" state={{category: "accessories"}} >Accesories</Link>
            </li>
        </ul>
    </>
    )
}

export default Home;