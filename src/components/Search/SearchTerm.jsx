import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Footer from "../Footer/Footer";

const SearchTerm = () => {
  const [items, setItemResult] = useState([]);
  const { keyWord } = useParams();
  const [empty, setEmpty] = useState(false);

  const d = new Date();
  let ms = d.getTime();

  useEffect(() => {
    const getItemm = async () => {
      await axios
        .get(
          "http://159.223.172.150/api/auction-service/auctions/items/search?itemName=" +
            `${keyWord}`
        )
        .then((res) => {
          console.log(res);
          setItemResult(res.data.items);

          if (res.data.items.length === 0) {
            setEmpty(true);
            console.log("ana fady walahy");
            console.log(res);
          } else {
            setEmpty(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getItemm();
  }, [keyWord]);

  return (
    <>
      <Navbar />

      {empty ? (
        <div className="py-5 my-5  text-center">
          <h3>no result </h3>
        </div>
      ) : (
        <div className="container-fluid">
          <div className=" biid">
            {items.map((items) => {
              return (
                <div className="  my-4">
                  <div className="Bidding-Card">
                    <div className="">
                      <img
                        className="bidding-img"
                        style={{ borderRadius: "16px 16px 0px 0px" }}
                        src={items.item.imageURL}
                        alt="watch"
                        height="247px"
                      />
                    </div>

                    <div>
                      <h4 style={{ fontSize: "10pt", fontWeight: "bold" }}>
                        {items.item.name.substring(0, 11)}
                      </h4>
                    </div>

                    <div className="biddng-price">
                      <div>
                        <i
                          className="fa fa-gavel mx-2"
                          style={{ fontSize: "35px", color: "black" }}
                        ></i>{" "}
                        <p style={{ fontSize: "10pt", marginLeft: "5px" }}>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            current Bid:{" "}
                          </span>{" "}
                          <br /> ${items.currentPrice}
                        </p>
                      </div>

                      <div style={{ color: "crimson" }}>
                        Expires on :
                        <Countdown
                          date={
                            Date.now() +
                            new Date(items.auctionEndTime).getTime() -
                            ms
                          }
                        />
                      </div>
                    </div>

                    <NavLink
                      className="items-button d-flex justify-content-center"
                      to={`/Items/${items._id}`}
                    >
                      {" "}
                      submit a bid
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SearchTerm;
