import { MapDetails } from "../types/mapDetails";
import { Link } from "react-router-dom";

interface Props {
    categoryData: Map<string, MapDetails>
    setCategory(value: string): void
    setIsMouseOn(value: boolean): void
}

const HomeItemsList: React.FC<Props> = (props) => {
    return (
        <ul>
            {
                Array.from(props.categoryData.keys()).map((key: string) => {
                    return  (<li key={key}>
                                <Link 
                                    onMouseEnter={ 
                                        () => {
                                            props.setCategory(key)
                                            props.setIsMouseOn(true)
                                        }
                                    }
                                    onMouseLeave={ () => props.setIsMouseOn(false) }
                                    to="/shop"
                                    state={props.categoryData.get(key)?.filters}
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

export default HomeItemsList;