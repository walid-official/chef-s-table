import { useEffect, useState } from "react";
import CookItem from "./CookItem";


const Cook = ({handleCookPreparing}) => {
    const [cooks,setCooks] = useState([])
    useEffect(() => {
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setCooks(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 gap-4 p-2">
            {
                cooks.map((cook,index) => <CookItem key={index} cookItem={cook} handleCookPreparing={handleCookPreparing}></CookItem>)
            }
        </div>
    );
};

export default Cook;