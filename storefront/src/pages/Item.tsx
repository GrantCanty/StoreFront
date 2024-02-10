import { ReactElement } from "react";
import { useParams } from "react-router-dom";

const Item: React.FC = (): ReactElement => {
    const { id } = useParams()
    return <h1>Viewing item {id}</h1>
}

export default Item;