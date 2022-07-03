import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchRitems = (cat) => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [Items, setItems] = useState([]);

  useEffect(() => {
    setloading(true);

    const AuctionItems = async () => {
      await axios
        .get(
          `http://159.223.172.150/api/auction-service/auctions/${id}/categories/${cat}`
        )
        .then((res) => {
          console.log(res);
          setItems(res.data.auctionListingItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    AuctionItems();
  }, [id, cat]);

  return { loading, Items };
};

export default useFetchRitems;
