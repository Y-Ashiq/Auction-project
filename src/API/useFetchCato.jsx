import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCato = (url) => {
  const [Cat, setCat] = useState([]);

  useEffect(() => {
    const getItemms = async () => {
      await axios
        .get(url)
        .then((res) => {
          console.log(res);

          setCat(res.data.categories);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getItemms();
  }, [url]);

  return { Cat };
};

export default useFetchCato;
