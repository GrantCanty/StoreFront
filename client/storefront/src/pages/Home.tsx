import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/home.css'

interface ShopDetails {
    category: string;
    gender: string;

}

interface MapDetails {
    url: string;
    filters: ShopDetails;
}

const Home: React.FC = (): ReactElement => {
    const [url, setUrl] = useState<string>()

    let mapData = new Map<string, MapDetails>();
    mapData.set("New Arrivals", {url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "New Arrivals", gender: ""}})
    mapData.set("Women", {url: "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "", gender: "Women"}})
    mapData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "", gender: "Men"}})
    mapData.set("Denim", {url: "https://images.unsplash.com/photo-1614700216291-427b6c8ce0ed?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Denim", gender: ""}})
    mapData.set("Tops", {url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Tops", gender: ""}})
    mapData.set("Jeans", {url: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Jeans", gender: ""}})
    mapData.set("Accessories", {url: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Accessories", gender: ""}})

    return (
    <>
        <div className="home">
            <div className="home-col-1">
                <div className="items-list">
                    <ul>
                        {
                            Array.from(mapData.keys()).map((key: string) => {
                                return  <li>
                                            <Link onMouseEnter={ () => setUrl(mapData.get(key)?.url) } to="/shop" state={mapData.get(key)?.filters} >{key}</Link>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="home-col-2">
                <img src={ url === undefined ? mapData.get("New Arrivals")?.url : url } />
            </div>
        </div>
    </>
    )
}

export default Home;