import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchBid = (url) => {

    const { id } = useParams();
    const [dataa, setData] = useState([]);
    const [datab, setDatab] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect( () => {
        setloading(true)

        const getBid =async ()=>{
            await axios.get( url+`${id}`)
            .then(res => {
                setDatab(res.data.auctionListing);
                setData(res.data.auctionListing.item);

                console.log(res);
                setloading(false);



            }).catch(err => {
                console.log(err.response.data.message);
            })


            
        }
        getBid();


    }, [id , url]);




    return {dataa , datab ,loading };
}
 
export default useFetchBid;