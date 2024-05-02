import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';
import NavBar from './assets/navbar';
import { MapDetails, MD, Cats } from './types/mapDetails';
import { ShopDetails } from './types/mapDetails';



function convertApiResponseToMap(apiResponse: MD): Map<string, MapDetails> {
    const map = new Map<string, MapDetails>();

    for (const key in apiResponse) {
        const prodsMap = new Map<string, Map<string, ShopDetails>>()
        map.set(key, apiResponse[key])
        
        Object.entries(map.get(key)?.products!).map((prods ) => {
            const catsMap = new Map<string, ShopDetails>()
            
            Object.entries(prods[1] as Cats).map((cats ) => {
                catsMap.set(cats[0], cats[1])
            })
            prodsMap.set(prods[0], catsMap)
        })
        map.get(key)!.products = (prodsMap)
    }
    return map;
}

function App() {
    const storeName = "Forte"

    const [mapData, setMapData] = useState<Map<string, MapDetails>>()
    useEffect(() => {
        fetch('http://localhost:8080/')
            .then(res => res.json())
            .then((data: any) => {
                setMapData(convertApiResponseToMap(data))
                return
            })
    }, [])

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