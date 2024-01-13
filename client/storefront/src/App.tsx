import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';
import NavBar from './assets/navbar';
import { MapDetails } from './types/mapDetails';
import { Gender, Products, } from './types/enums';
import { ShopDetails } from './types/mapDetails';

function App() {
    const storeName = "Forte"
    
    let categoryData = new Map<string, MapDetails>();
    //categoryData.set("New Arrivals", {url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Clothes.NA, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", ["Winter Collection", "Accessories", "Gifts", "View All"]],["Men", ["Winter Collection", "Accessories", "Gifts", "View All"]]]) })
    categoryData.set("New Arrivals", {url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.NA, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", new Map<string, ShopDetails>([["Winter Collection", {category: Products.NA, gender: Gender.W}], ["Accessories", {category: Products.ALL, gender: Gender.W}], ["Gifts", {category: Products.GIFT, gender: Gender.W}]]) ], ["Men", new Map<string, ShopDetails>([["Winter Collection", {category: Products.NA, gender: Gender.M}], ["Accessories", {category: Products.ALL, gender: Gender.M}], ["Gifts", {category: Products.GIFT, gender: Gender.M}]]) ]]) })
    categoryData.set("Women", {url: "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALL, gender: Gender.W}, products: new Map<string, Map<string, ShopDetails>>([["Clothes", new Map<string, ShopDetails>([["Dresses", {category: Products.DRESSES, gender: Gender.W}], ["Coats", {category: Products.COATS, gender: Gender.W}], ["Knitwear", {category: Products.KNIT, gender: Gender.W}], ["Sweatshirts", {category: Products.SWEAT, gender: Gender.W}], ["Jackets", {category: Products.JACKET, gender: Gender.W}], ["Tops", {category: Products.TOP, gender: Gender.W}], ["Bottoms", {category: Products.BOTTOM, gender: Gender.W}], ["Jeans", {category: Products.JEAN, gender: Gender.W}], ["Skirts", {category: Products.SKIRT, gender: Gender.W}], ["All Clothes", {category: Products.ALLCLO, gender: Gender.W}]])], ["Accessories", new Map<string, ShopDetails>([["Jewlery", {category: Products.JEWLERY, gender: Gender.W}], ["Shoes", {category: Products.SHOES, gender: Gender.W}], ["Hats", {category: Products.HATS, gender: Gender.W}], ["Bags", {category: Products.BAGS, gender: Gender.W}], ["Leather", {category: Products.LEATHER, gender: Gender.W}], ["Scarves", {category: Products.SCARVES, gender: Gender.W}], ["All Accessories", {category: Products.ALLACC, gender: Gender.W}]])] ]) })
    categoryData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALL, gender: Gender.M}, products: new Map<string, Map<string, ShopDetails>>([["Clothes", new Map<string, ShopDetails>([["Suits", {category: Products.SUIT, gender: Gender.M}], ["Coats", {category: Products.COATS, gender: Gender.M}], ["Knitwear", {category: Products.KNIT, gender: Gender.M}], ["Sweatshirts", {category: Products.SWEAT, gender: Gender.M}], ["Jackets", {category: Products.JACKET, gender: Gender.M}], ["Tops", {category: Products.TOP, gender: Gender.M}], ["Bottoms", {category: Products.BOTTOM, gender: Gender.M}], ["Jeans", {category: Products.JEAN, gender: Gender.M}], ["All Clothes", {category: Products.ALLCLO, gender: Gender.M}]])], ["Accessories", new Map<string, ShopDetails>([["Jewlery", {category: Products.JEWLERY, gender: Gender.M}], ["Shoes", {category: Products.SHOES, gender: Gender.M}], ["Hats", {category: Products.HATS, gender: Gender.M}], ["Bags", {category: Products.BAGS, gender: Gender.M}], ["Leather", {category: Products.LEATHER, gender: Gender.M}], ["Scarves", {category: Products.SCARVES, gender: Gender.M}], ["All Accessories", {category: Products.ALLACC, gender: Gender.M}]])] ]) })
    //categoryData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALL, gender: Gender.W}, products: new Map<string, string[]>([["Clothes", ["Suits", "Coats", "Knitwear", "Sweatshirts", "Jackets", "Tops", "Bottoms", "Jeans", "View All"]],["Accessories", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]]]) })
    categoryData.set("Denim", {url: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.JEAN, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Products", new Map<string, ShopDetails>( [["Men's Denim", {category: Products.JEAN, gender: Gender.M}], ["Women's Denim", {category: Products.JEAN, gender: Gender.W}]])]]) })
    categoryData.set("Accessories", {url: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALLACC, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", new Map<string, ShopDetails>( [["Jewlery", {category: Products.JEWLERY, gender: Gender.W}], ["Shoes", {category: Products.SHOES, gender: Gender.W}], ["Hats", {category: Products.HATS, gender: Gender.W}], ["Bags", {category: Products.BAGS, gender: Gender.W}], ["Leather", {category: Products.LEATHER, gender: Gender.W}], ["Scarves", {category: Products.SCARVES, gender: Gender.W}], ["All Accessories", {category: Products.ALLACC, gender: Gender.W}]])], ["Men", new Map<string, ShopDetails>( [["Jewlery", {category: Products.JEWLERY, gender: Gender.M}], ["Shoes", {category: Products.SHOES, gender: Gender.M}], ["Hats", {category: Products.HATS, gender: Gender.M}], ["Bags", {category: Products.BAGS, gender: Gender.M}], ["Leather", {category: Products.LEATHER, gender: Gender.M}], ["Scarves", {category: Products.SCARVES, gender: Gender.M}], ["All Accessories", {category: Products.ALLACC, gender: Gender.M}]])] ]) })
    categoryData.set("Eau de Toilette", {url: "https://images.unsplash.com/photo-1663869960499-6866301c0259?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.FRAGRENCE, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", new Map<string, ShopDetails>([["Fragrence", {category: Products.FRAGRENCE, gender: Gender.W}]])], ["Men", new Map<string, ShopDetails>([["Fragrence", {category: Products.FRAGRENCE, gender: Gender.M}]])]])})
    //categoryData.set("Gifts")
    
    return (
       <>
            <Routes>
                <Route element={<NavBar categoryData={categoryData}/>}>
                    <Route path='/' element={<Home storeName={storeName} categoryData={categoryData} />} />
                    <Route path='shop'>
                        <Route index element={<Shop storeName={storeName} />} />
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