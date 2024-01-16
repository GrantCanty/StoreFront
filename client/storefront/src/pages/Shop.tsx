import { ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAppTitle from "../hooks/useAppTitle";
import { Gender, Products, } from '../types/enums';
import { ItemsListDetails } from "../types/itemsListDetails";
import ItemListing from "../assets/itemListing";
import '../styles/shop.css'
import Button from "../assets/button";

interface Props {
    storeName: string
}

function isEmpty(s: string): boolean {
    if (s === undefined) {
        return true
    }
    else {
        return s.length === 0
    }
}

const Shop: React.FC<Props> = (props): ReactElement => {
    const location = useLocation()
    const {category, gender} = location.state
    const nav = useNavigate();

    let activeCategory = isEmpty(category) || category === Products.ALL ? "Products" : category === Products.ALLACC ? "Accessories" : category === Products.ALLCLO ? "Clothes" : category

    useAppTitle(`Shop ${isEmpty(gender) || gender === Gender.U ? "" : gender + "'s"} ${activeCategory} | ${props.storeName}`)

    let list: ItemsListDetails[] = new Array<ItemsListDetails>();
    let itm1: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/Lens_T-Shirt-T-Shirt-LDM101118-215100-Ivory_Black_2500x.jpg?v=1703160509", itemName: "Merkel Shirt", itemPrice: 79.99, itemID: "0", fit: "Regular"}
    let itm2: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/Como_Reg_Cargo_Suit_Pants-Pants-LDM501082-100100-Black-5_2500x.jpg?v=1698934408", itemName: "Cargo Pants", itemPrice: 99.99, itemID: "1", fit: "Slim"}
    let itm3: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/Marcus_Puffer_Jacket-Jacket-COL610071-460460-Dark_Navy-7_2500x.jpg?v=1698139478", itemName: "Down Coat", itemPrice: 159.99, itemID: "2", fit: "Regular"}
    let itm4: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/Kody_Heavy_Corduroy_Pants-Pants-LDM510095-856856-Ebony_Brown-5_2500x.jpg?v=1698934667", itemName: "Corduroy Pants", itemPrice: 89.99, itemID: "3", fit: "Loose"}
    let itm5: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/William_Stripe_2-Pack_Socks-Underwear_and_socks-LDM950006-460241-Dark_Navy_Off_White_2500x.jpg?v=1703155326", itemName: "Logo Socks", itemPrice: 9.99, itemID: "4", fit: "Regular"}
    let itm6: ItemsListDetails = {photoURL: "https://lesdeux.com/cdn/shop/files/McKay_Check_Wool_Coat-Coat-LDM620067-810335-Dark_Sand_Mountain_Grey_b5a1c2aa-a672-4797-8ef3-35b4afb3e14b_2500x.jpg?v=1690291540", itemName: "Thomas Overshirt", itemPrice: 149.99, itemID: "5", fit: "Regular"}
    list.push(itm1)
    list.push(itm2)
    list.push(itm3)
    list.push(itm4)
    list.push(itm5)
    list.push(itm6)

    return (
    <>
        <h1 className="shop-heading"><Link to='/' ><span className="shop-heading-name" >{props.storeName}</span></Link> { isEmpty(gender) || gender === Gender.U ? null : <Link to='/shop' state={{gender: gender, category: Products.ALL}} > <code>&#8250;</code><span className="shop-heading-gender">{gender}</span></Link> } { isEmpty(category) || category === Products.ALL ? null : <Link to='/shop' state={{gender: Gender.U, category: category}}> <code>&#8250;</code><span className="shop-heading-category">{activeCategory}</span></Link> }  </h1>
        <button onClick={ () => { nav('/shop', { state: {category: Products.ALL, gender: gender }} ) } }>{isEmpty(category) ? "Category" : category}</button>
        <button onClick={ () => { nav('/shop', { state: {category: category, gender: Gender.U }} ) } }>{isEmpty(gender) ? "Unisex" : gender}</button>
        <Button
            text={category}
            hoverText="X"
            redirectLink="/shop" 
            newState={{category: Products.ALL, gender: gender}}
            dropDownItems={Object.values(Products)}
        />

        <ul className="shop-listing">
            {list.map((item: ItemsListDetails) => {
                return <li key={item.itemID} className="shop-listing-item"><Link to={`/shop/${item.itemID}`}> <ItemListing photoURL={item.photoURL} itemID={item.itemID} itemName={item.itemName} itemPrice={item.itemPrice} fit={item.fit} /> </Link></li>
            })}
        </ul>
    </>
    )
}

export default Shop;