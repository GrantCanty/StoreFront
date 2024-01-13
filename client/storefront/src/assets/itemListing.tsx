import { ReactElement } from "react";
import { ItemsListDetails } from "../types/itemsListDetails";
import "../styles/itemlisting.css"

const ItemListing: React.FC<ItemsListDetails> = (props): ReactElement => {

    return (
        <div className="item-listing">
            <img alt="clothing item" src={props.photoURL} />
            <div className="item-listing-details">
                <div className="name">
                    <p>{props.itemName}</p>
                </div>
                <div className="fit">
                    <p>{props.fit} fit</p>
                </div>
                <div className="price">
                    <p>${props.itemPrice.toString()}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListing;