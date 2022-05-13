import { useState, useEffect } from 'react';
import axios from 'axios'


const useFetchItems = (url) => {

    const [dataa, setData] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {

        setloading(true)

        const AuctionItems = async () => {

            await axios.get(url)
                .then(res => {
                    setData(res.data)

                    console.log(res)
                    setloading(false)



                }).catch(err => {
                    console.log(err)
                })


        }

        AuctionItems();

    }, [url]);

    return {dataa ,loading};
}
 
export default useFetchItems;