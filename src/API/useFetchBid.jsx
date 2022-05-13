import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchBid = (url) => {

    const { id } = useParams();
    const [dataa, setData] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect( () => {
        setloading(true)

        const getBid =async ()=>{
            await axios.get( url + `${id}`)
            .then(res => {
                setData(res.data)

                console.log(res)
                setloading(false)



            }).catch(err => {
                console.log(err)
            })


            
        }
        getBid();


    }, [id]);




    return {dataa , loading };
}
 
export default useFetchBid;