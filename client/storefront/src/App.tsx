import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';
import NavBar from './assets/navbar';
import { MapDetails } from './types/mapDetails';

function App() {
    let categoryData = new Map<string, MapDetails>();
    categoryData.set("New Arrivals", {url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "New Arrivals", gender: ""}, products: new Map<string, string[]>([["Women", ["Winter Collection", "Accessories", "Gifts", "View All"]],["Men", ["Winter Collection", "Accessories", "Gifts", "View All"]]]) })
    categoryData.set("Women", {url: "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "", gender: "Women"}, products: new Map<string, string[]>([["Clothes", ["Dresses", "Coats", "Knitwear", "Sweatshirts", "Jackets", "Tops", "Bottoms", "Jeans", "Skirts", "View All"]],["Accessories", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]]]) })
    categoryData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "", gender: "Men"}, products: new Map<string, string[]>([["Clothes", ["Suits", "Coats", "Knitwear", "Sweatshirts", "Jackets", "Tops", "Bottoms", "Jeans", "Skirts", "View All"]],["Accessories", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]]]) })
    categoryData.set("Denim", {url: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Denim", gender: ""}, products: new Map<string, string[]>([["Products", ["Men's Denim", "Women's Denim"]]]) })
    categoryData.set("Accessories", {url: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Accessories", gender: ""}, products: new Map<string, string[]>([["Women", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]],["Men", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]]]) })
    categoryData.set("Eau de Toilette", {url: "https://images.unsplash.com/photo-1663869960499-6866301c0259?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: "Eau de Toilette", gender: ""}, products: new Map<string, string[]>([["Women", ["Fragrence"]], ["Men", ["Fragrence"]]])})
    //categoryData.set("Gifts")
    
    return (
       <>
            <Routes>
                <Route element={<NavBar categoryData={categoryData}/>}>
                    <Route path='/' element={<Home categoryData={categoryData} />} />
                    <Route path='shop'>
                        <Route index element={<Shop />} />
                        <Route path=':id' element={<Item />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Route>
                <Route path='checkout' element={<CheckOut />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;