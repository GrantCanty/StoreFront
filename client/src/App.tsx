import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios  from 'axios';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';
import NavBar from './assets/navbar';
import { MapDetails, MD, Cats } from './types/mapDetails';
import { Gender, Products, } from './types/enums';
import { ShopDetails } from './types/mapDetails';



function convertApiResponseToMap(apiResponse: MD): Map<string, MapDetails> {
    const map = new Map<string, MapDetails>();
    console.log("beginning apiResp: ", apiResponse)

    for (const key in apiResponse) {
        const prodsMap = new Map<string, Map<string, ShopDetails>>
        
        console.log("key: ", key)
        console.log("val: ", apiResponse[key])
        map.set(key, apiResponse[key])
        
        Object.entries(map.get(key)?.products!).map((prods ) => {
            const catsMap = new Map<string, ShopDetails>
            //console.log("prods: ", prods)
            
            Object.entries(prods[1] as Cats).map((cats ) => {
                console.log("cats: ", cats)
                console.log("cats[0]: ", cats[0])
                console.log("cats[1]: ", cats[1])
                catsMap.set(cats[0], cats[1])
            })

            //console.log("catsMap: ", catsMap)
            prodsMap.set(prods[0], catsMap)
            /*const p = map.get(key)?.products//?.set(prods[0], catsMap)
            p?.set(prods[0], catsMap)*/
        })
        //console.log(prodsMap)
        //console.log("prodsMap: ", prodsMap)
        //if (map.get(key).products !== undefined) {
        map.get(key)!.products = (prodsMap)
        //}
    }

    console.log("how the data looks rn: ", map)

    /*for (const key in apiResponse) {
        const genderMap = new Map<string, ShopDetails>();
        const response = apiResponse[key];

        for (const gender in response.products) {
            const products = response.products[gender];
            genderMap.set(gender, products);
            console.log("genderMap: ", genderMap)
        }

        map.set(key, genderMap);
    }*/

    return map;
}

function App() {
    const storeName = "Forte"

    const [mapData, setMapData] = useState<Map<string, MapDetails>>()
    useEffect(() => {
        //let i = axios.get()
        
        /*fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(parsed => setData(new Map<string, MapDetails>(Object.entries(parsed))))
        //console.log("i: ", i.then())*/
        fetch('http://localhost:8080/')
            .then((res) => {
                return res.json()
            })
            .then((data: any) => {
                
                        console.log("first res: ", data)
                        setMapData(convertApiResponseToMap(data))
                        /*Object.entries(data).map(
                            ([k,v], i) => [k, fn(v, k, i)]
                        )*/
                        /*let d: [string, MapDetails][] = Object.entries(data)
                        let tmp = Object.entries(data)

                        d.map((val: [k: string, v: MapDetails], i: number) => {
                            console.log(`d[${i}]: `, d[i])
                            tmp[i][1] = Object.entries(val[1])

                        })

                        //d = tmp

                        console.log("tmp: ", new Map<string, MapDetails>(d))*/
        
                        //console.log("mapData: ", mapData)
                        //mapData?.keys().next()
                        /*data.map((k: string) => {
                            //console.log(data[k]?.products)
                            //console.log("keys 1: ", Object.keys(data))
                            console.log("searching in: ", k)
                            data[k].products =  new Map<string, Map<string, ShopDetails>>(Object.entries(data[k].products))
                            Array.from(Object.keys(data[k].products)).forEach((products) => {
                                console.log("searching in: ", products)
                                //console.log("products: ", data[k].products)
                                console.log("products types: ", products)
                                console.log("map of products: ", data[k]?.products[products])
                                //let g = new Map<string, ShopDetails>(Object.entries(data[k]?.products[products]))
                                //console.log(new Map<string, Map<string, ShopDetails>>())
                                //console.log(Object.keys)
                                //console.log(`is data[${k}].products[${products}] undefined: `, data[k]?.products[products] === undefined, data, data[k].products)
                                //console.log("map of prods: ", (Object.entries(data[k].products[products])))
                                //if(data[k].products[products] !== null && data[k].products[products] !== undefined ) {
                                    //console.log("map of prods: ", (Object.entries(data[k].products[products])))
                                    data[k].products[products] = new Map<string, ShopDetails>(Object.entries(data[k].products[products]))
                                //}
                                data[k].products =  new Map<string, Map<string, ShopDetails>>(Object.entries(data[k].products))
                                //if (Object.entries(data[k].products[products] !== null && Object.entries(data[k].products[products] !== undefined)) {
                                    //data[k].products[products] = new Map<string, ShopDetails>(Object.entries(data[k].products[products]))
                                //}
                                //data[k].products[products] = new Map<string, ShopDetails>(Object.entries(data[k].products[products]))
                                //data[k].products =  new Map<string, Map<string, ShopDetails>>(Object.entries(data[k].products))
                                //data[k].products = new Map<string, Map<string, ShopDetails>>(products, Object(data[k]?.products[products]) )
                                //data[k].products = new Map<string, Map<string, ShopDetails>>()
                                //data[k]?.products = new Map<string, ShopDetails>(data[k]?.products[products])
                            })
        
                        })*/
                        //let g = new Map<string, Map<String, ShopDetails>>
                        //data = 5
                        //conso
                        //console.log("d: ", new Map<string, MapDetails>(Object.entries(data)))
                        //setMapData(new Map<string, MapDetails>(Object.entries(data)))
                        /*Object.keys(data).map((k, v) => {
                            console.log("data[k]: ", data[k])
                            setMapData(new Map<string, MapDetails>( if(mapData !== undefined) {mapData.set(k, data[k])} ) ) );
                        })*/
                        
                        //const { data } = response
                        //console.log("res: ", res.data)
                        //let json = res.data.json()
                        /*json.map((e: MapDetails) => {
                            console.log("e: ", e)
                        })*/
                        //setData(res.data)
                        return
                    })

            //.then()
    }, [])

    //console.log("data as state: ", mapData!)

    /*if (!mapData) {
        return <p>Loading...</p>
    }*/
    
    let categoryData = new Map<string, MapDetails>();
    categoryData.set(
        "New Arrivals", 
            {url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            filters: {category: Products.NA, gender: Gender.U},
            products: new Map<string, Map<string, ShopDetails>>([
                ["Women", new Map<string, ShopDetails>([
                    ["Winter Collection", {category: Products.NA, gender: Gender.W}], 
                    ["Accessories", {category: Products.ALL, gender: Gender.W}], 
                    ["Gifts", {category: Products.GIFT, gender: Gender.W}]]
                )], 
                ["Men", new Map<string, ShopDetails>([
                    ["Winter Collection", {category: Products.NA, gender: Gender.M}], 
                    ["Accessories", {category: Products.ALL, gender: Gender.M}], 
                    ["Gifts", {category: Products.GIFT, gender: Gender.M}]]
                )]]
            )
        }
    )
    categoryData.set(
        "Women", 
            {url: "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            filters: {category: Products.ALL, gender: Gender.W}, 
            products: new Map<string, Map<string, ShopDetails>>([
                ["Clothes", new Map<string, ShopDetails>([
                    ["Dresses", {category: Products.DRESSES, gender: Gender.W}], 
                    ["Coats", {category: Products.COATS, gender: Gender.W}], 
                    ["Knitwear", {category: Products.KNIT, gender: Gender.W}], 
                    ["Sweatshirts", {category: Products.SWEAT, gender: Gender.W}], 
                    ["Jackets", {category: Products.JACKET, gender: Gender.W}], 
                    ["Tops", {category: Products.TOP, gender: Gender.W}], 
                    ["Bottoms", {category: Products.BOTTOM, gender: Gender.W}], 
                    ["Jeans", {category: Products.JEAN, gender: Gender.W}], 
                    ["Skirts", {category: Products.SKIRT, gender: Gender.W}], 
                    ["All Clothes", {category: Products.ALLCLO, gender: Gender.W}]]
                )], 
                ["Accessories", new Map<string, ShopDetails>([
                    ["Jewlery", {category: Products.JEWLERY, gender: Gender.W}], 
                    ["Shoes", {category: Products.SHOES, gender: Gender.W}], 
                    ["Hats", {category: Products.HATS, gender: Gender.W}], 
                    ["Bags", {category: Products.BAGS, gender: Gender.W}], 
                    ["Leather", {category: Products.LEATHER, gender: Gender.W}], 
                    ["Scarves", {category: Products.SCARVES, gender: Gender.W}], 
                    ["All Accessories", {category: Products.ALLACC, gender: Gender.W}]]
                )]]
            )
        }
    )
    categoryData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALL, gender: Gender.M}, products: new Map<string, Map<string, ShopDetails>>([["Clothes", new Map<string, ShopDetails>([["Suits", {category: Products.SUIT, gender: Gender.M}], ["Coats", {category: Products.COATS, gender: Gender.M}], ["Knitwear", {category: Products.KNIT, gender: Gender.M}], ["Sweatshirts", {category: Products.SWEAT, gender: Gender.M}], ["Jackets", {category: Products.JACKET, gender: Gender.M}], ["Tops", {category: Products.TOP, gender: Gender.M}], ["Bottoms", {category: Products.BOTTOM, gender: Gender.M}], ["Jeans", {category: Products.JEAN, gender: Gender.M}], ["All Clothes", {category: Products.ALLCLO, gender: Gender.M}]])], ["Accessories", new Map<string, ShopDetails>([["Jewlery", {category: Products.JEWLERY, gender: Gender.M}], ["Shoes", {category: Products.SHOES, gender: Gender.M}], ["Hats", {category: Products.HATS, gender: Gender.M}], ["Bags", {category: Products.BAGS, gender: Gender.M}], ["Leather", {category: Products.LEATHER, gender: Gender.M}], ["Scarves", {category: Products.SCARVES, gender: Gender.M}], ["All Accessories", {category: Products.ALLACC, gender: Gender.M}]])] ]) })
    //categoryData.set("Men", {url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALL, gender: Gender.W}, products: new Map<string, string[]>([["Clothes", ["Suits", "Coats", "Knitwear", "Sweatshirts", "Jackets", "Tops", "Bottoms", "Jeans", "View All"]],["Accessories", ["Jewlery", "Shoes", "Hats", "Bags", "Leather", "Scarves", "View All"]]]) })
    categoryData.set("Denim", {url: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.JEAN, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Products", new Map<string, ShopDetails>( [["Men's Denim", {category: Products.JEAN, gender: Gender.M}], ["Women's Denim", {category: Products.JEAN, gender: Gender.W}]])]]) })
    categoryData.set("Accessories", {url: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.ALLACC, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", new Map<string, ShopDetails>( [["Jewlery", {category: Products.JEWLERY, gender: Gender.W}], ["Shoes", {category: Products.SHOES, gender: Gender.W}], ["Hats", {category: Products.HATS, gender: Gender.W}], ["Bags", {category: Products.BAGS, gender: Gender.W}], ["Leather", {category: Products.LEATHER, gender: Gender.W}], ["Scarves", {category: Products.SCARVES, gender: Gender.W}], ["All Accessories", {category: Products.ALLACC, gender: Gender.W}]])], ["Men", new Map<string, ShopDetails>( [["Jewlery", {category: Products.JEWLERY, gender: Gender.M}], ["Shoes", {category: Products.SHOES, gender: Gender.M}], ["Hats", {category: Products.HATS, gender: Gender.M}], ["Bags", {category: Products.BAGS, gender: Gender.M}], ["Leather", {category: Products.LEATHER, gender: Gender.M}], ["Scarves", {category: Products.SCARVES, gender: Gender.M}], ["All Accessories", {category: Products.ALLACC, gender: Gender.M}]])] ]) })
    categoryData.set("Eau de Toilette", {url: "https://images.unsplash.com/photo-1663869960499-6866301c0259?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filters: {category: Products.FRAGRENCE, gender: Gender.U}, products: new Map<string, Map<string, ShopDetails>>([["Women", new Map<string, ShopDetails>([["Fragrence", {category: Products.FRAGRENCE, gender: Gender.W}]])], ["Men", new Map<string, ShopDetails>([["Fragrence", {category: Products.FRAGRENCE, gender: Gender.M}]])]])})
    //categoryData.set("Gifts")
    console.log("how the data should look: ", categoryData)

    if (!mapData) {
        return <p>Loading...</p>
    }
    
    return (
       <>
            <Routes>
                <Route element={<NavBar categoryData={mapData}/>}>
                    <Route path='/' element={<Home storeName={storeName} categoryData={mapData} />} />
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