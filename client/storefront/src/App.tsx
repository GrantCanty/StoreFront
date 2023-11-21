import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';
import NavBar from './assets/navbar';

function App() {
    return (
       <>
            <Routes>
                <Route element={<NavBar />}>
                    <Route path='/' element={<Home />} />
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