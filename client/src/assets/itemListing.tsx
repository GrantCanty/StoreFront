import { ReactElement, useState } from "react";
import { ItemsListDetails } from "../types/itemsListDetails";
import "../styles/itemlisting.css"

//add onmouseon/off effects for image to change to secondary photo
const ItemListing: React.FC<ItemsListDetails> = (props): ReactElement => {

    const [imageUrl, setImageUrl] = useState<string>(props.url)

    return (
        <div className="item-listing">
            <div className="item-listing-image">            
                <img onMouseOver={() => props.hoverUrl !== "" ? setImageUrl(props.hoverUrl) : null } onMouseLeave={() => setImageUrl(props.url)} alt="clothing item" src={imageUrl} />
            </div>
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