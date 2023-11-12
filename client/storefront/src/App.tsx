import {Link, Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
import Item from './pages/Item';
import CheckOut from './pages/Checkout';
import NotFound from './pages/NotFound';

function App() {
    return (
       <>
            {/*<nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/checkout'>Checkout</Link>
                    </li>
                </ul>
            </nav>*/}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop'>
                    <Route index element={<Shop />} />
                    <Route path=':id' element={<Item />} />
                </Route>
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;