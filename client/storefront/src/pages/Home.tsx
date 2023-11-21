import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ShopDetails {
    category: string;
    gender: string;

}

interface MapDetails {
    url: string;
    filters: ShopDetails;
}

const Home: React.FC = (): ReactElement => {
    let mapData = new Map<string, MapDetails>();
    mapData.set("New Arrivals", {url: "na", filters: {category: "New Arrivals", gender: ""}})
    mapData.set("Women", {url: "wmn", filters: {category: "", gender: "Women"}})
    mapData.set("Men", {url: "mn", filters: {category: "", gender: "Men"}})
    mapData.set("Denim", {url: "dnm", filters: {category: "Denim", gender: ""}})
    mapData.set("Tops", {url: "tp", filters: {category: "Tops", gender: ""}})
    mapData.set("Jeans", {url: "jn", filters: {category: "Jeans", gender: ""}})
    mapData.set("Accessories", {url: "acsrs", filters: {category: "Accessories", gender: ""}})
    
    return (
    <>
        <h1>Home</h1>
        <ul>
            {
                Array.from(mapData.keys()).map((key: string) => {
                    return <li onMouseEnter={ () => console.log(mapData.get(key)) }><Link to="/shop" state={mapData.get(key)?.filters} >{key}</Link></li>
                })
            }
        </ul>
    </>
    )
}

export default Home;