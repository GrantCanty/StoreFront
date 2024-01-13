import { ReactElement } from "react";
import { ItemsListDetails } from "../types/itemsListDetails";
import "../styles/itemlisting.css"

const ItemListing: React.FC<ItemsListDetails> = (props): ReactElement => {

    return (
        <div className="item-listing">
            {<img alt="clothing item" src={props.photoURL} />}
            <p>{props.itemName}</p>
            <p>${props.itemPrice.toString()}</p>
        </div>
    )
}

export default ItemListing;