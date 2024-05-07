import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

    let activeCategory = isEmpty(category) || category === Products.ALL ? "Products" : category === Products.ALLACC ? "Accessories" : category === Products.ALLCLO ? "Clothes" : category

    useAppTitle(`Shop ${isEmpty(gender) || gender === Gender.U ? "" : gender + "'s"} ${activeCategory} | ${props.storeName}`)

    const [list, setList] = useState<ItemsListDetails[]>()

    useEffect(() => {
        fetch("http://localhost:8080/shop", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({category: category, gender: gender}),
        })
            .then(resp => resp.json())
            .then((resp) => {
                console.log("resp: ", resp )
                return resp
            })
            .then(resp => setList(resp))
    }, [category, gender])

    /*if (list === undefined || list === null) {
        return <></>
    }*/
    //else {
        //console.log(list[0].url)

        return (
        <>
            <h1 className="shop-heading"><Link to='/' ><span className="shop-heading-name" >{props.storeName}</span></Link> { isEmpty(gender) || gender === Gender.U ? null : <Link to='/shop' state={{gender: gender, category: Products.ALL}} > <code>&#8250;</code><span className="shop-heading-gender">{gender}</span></Link> } { isEmpty(category) || category === Products.ALL ? null : <Link to='/shop' state={{gender: Gender.U, category: category}}> <code>&#8250;</code><span className="shop-heading-category">{activeCategory}</span></Link> }  </h1>
            <Button
                text={category}
                redirectLink="/shop" 
                dropDownItems={Object.values(Products)}
            />
            <Button
                text={gender}
                redirectLink="/shop" 
                dropDownItems={Object.values(Gender)}
            />

            <ul className="shop-listing">
                { list === null || list === undefined ? <>No Results</> : list.map((item: ItemsListDetails) => {
                    return <li key={item.itemID} className="shop-listing-item"><Link to={`/shop/${item.itemID}`}> <ItemListing url={item.url} itemID={item.itemID} itemName={item.itemName} itemPrice={item.itemPrice} fit={item.fit} /> </Link></li>
                })}
            </ul>
        </>
        )
    //}
}

export default Shop;