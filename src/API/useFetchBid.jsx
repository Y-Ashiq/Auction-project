import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const useFetchBid = (url) => {
  const { id } = useParams();
  const [dataa, setData] = useState([]);
  const [datab, setDatab] = useState([]);
  const [loading, setloading] = useState(false);

  const [Cat, setCat] = useState(" ");

  const socket = io("http://159.223.99.196:3004");

  useEffect(() => {
    setloading(true);

    const getBid = async () => {
      await axios
        .get(url + `${id}`)
        .then((res) => {
          setDatab(res.data.auctionListing);
          setData(res.data.auctionListing.item);
          setCat(res.data.auctionListing.item.category);

          console.log(res);
          setloading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    };
    getBid();
  }, [url, id]);


  useEffect(()=>{

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("connection-check", (res) => {
      console.log(res);
    });

    socket.on("join-auction-error", (res) => {
      console.log(res);
    });

    socket.on("join-auction-success", (res) => {
      console.log(res);
    });


    socket.emit("join-auction", { auctionID: `${id}` });

// eslint-disable-next-line 
  },[id])

  return { dataa, datab, loading, Cat, socket };
};

export default useFetchBid;
