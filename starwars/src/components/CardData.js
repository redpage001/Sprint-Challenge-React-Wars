import React, {useState, useEffect} from "react";
import axios from "axios";
import CardMaker from "./CardMaker";

const CardData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            // console.log(response);
            let characters = setData(response.data.results);
        })
        .catch(error => {
            console.log("No Data was Returned", error);
        })
    }, []) 

    return (
        data.map((val, index) => (
            <CardMaker key={index} data={val}/>
        ))
    )
}

export default CardData;