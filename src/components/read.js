import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";

function Read(){

    const [data,setData] = useState([]);

    useEffect(
        ()=>{
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response)=>{
                    setData(response.data.books)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );


    return(
        <div>
            <h3>Hello from the read component!</h3>
            {/* stores data to books*/}
            <Books MyBooks ={data}></Books>
        </div>
    )

}
export default Read;