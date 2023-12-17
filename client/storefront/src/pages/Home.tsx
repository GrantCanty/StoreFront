import { ReactElement, useState } from "react";
import '../styles/home.css'
import useAppTitle from "../hooks/useAppTitle";
import HomeItemsList from "../assets/homeItemsList";
import { MapDetails } from "../types/mapDetails";

interface Props {
    categoryData: Map<string, MapDetails>
}

function timer(isMouseOn: boolean | undefined, mapData: Map<string, MapDetails>, setCategory: (value: string) => void ) {
    /*let i = 0
    setInterval(() => {
        if(!isMouseOn) {
            i++
            setCategory(Array.from(mapData.keys())[i%3])
        }
        console.log(isMouseOn)
    },3000)*/
}

const Home: React.FC<Props> = (props): ReactElement => {
    useAppTitle("Home | Forte")

    const [category, setCategory] = useState<string>()
    const [isMouseOn, setIsMouseOn] = useState<boolean>(false)
    timer(isMouseOn, props.categoryData, setCategory)

    return (
    <>
        <div className="home">
            <div className="home-col-1">
                <div className="items-list">
                    <HomeItemsList categoryData={props.categoryData} setCategory={setCategory} setIsMouseOn={setIsMouseOn} />
                </div>
            </div>
            <div className="home-col-2">
                <div className="img-container">
                    <img alt="clothing article" src={ category === undefined ? props.categoryData.get("New Arrivals")?.url : props.categoryData.get(category)?.url } />
                    <div className="image-descriptor">{category}</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;