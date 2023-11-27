import { MapDetails } from '../pages/Home'
import { Link } from "react-router-dom";
//import React from 'react';

interface Props {
    mapData: Map<string, MapDetails>
    setUrl(value: string | undefined): void
}

const ItemsList: React.FC<Props> = (props) => {
//function ItemsList(mapData: Map<string, MapDetails> ): JSX.Element {
    return (
        <ul>
                        {
                            Array.from(props.mapData.keys()).map((key: string) => {
                                return  (<li key={key}>
                                            <Link 
                                                onMouseEnter={ () => props.setUrl(props.mapData.get(key)?.url) }
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