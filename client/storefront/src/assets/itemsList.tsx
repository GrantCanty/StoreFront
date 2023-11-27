import { MapDetails } from "../types/mapDetails";
import { Link } from "react-router-dom";

interface Props {
    mapData: Map<string, MapDetails>
    setCategory(value: string): void
}

const ItemsList: React.FC<Props> = (props) => {
    return (
        <ul>
                        {
                            Array.from(props.mapData.keys()).map((key: string) => {
                                return  (<li key={key}>
                                            <Link 
                                                onMouseEnter={ () => props.setCategory(key) }
                                                to="/shop"
                                                state={props.mapData.get(key)?.filters}
                                            >
                                                    <span className="brand-name" >Forte</span>
                                                    <span className="item-name">{key}</span>
                                            </Link>
                                        </li>
                                )
                            })
                        }
                    </ul>
    )
}

export default ItemsList;