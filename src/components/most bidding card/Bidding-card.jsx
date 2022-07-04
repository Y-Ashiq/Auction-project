import './Bidding-card.css'
import Countdown from 'react-countdown';
import useFetchItems from "../../API/useFetchItems";
import { NavLink } from "react-router-dom";
import React from "react";




const MostBidding = () => {


  const url =
    "http://159.223.172.150/api/auction-service/auctions/closing-auctions";
  const { dataa, loading } = useFetchItems(url);

  const d = new Date();
  let ms = d.getTime();
  return (

    <div>
         <div className=" biid">
        {loading ? (
          <div className="d-flex align-items-center">
            <strong className="mx-3">Loading...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        ) : (
          React.Children.toArray(
            dataa.slice(0, 3).map((product) => {
              return (
                <div className="  my-3">
                  <div key={product._id} className="Bidding-Card">
                    <div className="">
                      <img
                        className="bidding-img"
                        style={{ borderRadius: "16px 16px 0px 0px" }}
                        src={product.item.imageURL}
                        alt="watch"
                        height="247px"
                      />
                    </div>

                    <div>
                      <h4 style={{ fontSize: "10pt", fontWeight: "bold" }}>
                        {product.item.name.substring(0, 11)}
                      </h4>
                    </div>

                    <div className="biddng-price">
                      <div>
                        <i
                          className="fa fa-gavel mx-2"
                          style={{ fontSize: "35px", color: "black" }}
                        ></i>
                        <p style={{ fontSize: "10pt", marginLeft: "5px" }}>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            current Bid:{" "}
                          </span>{" "}
                          <br /> ${product.currentPrice}
                        </p>
                      </div>

                      <div style={{ color: "crimson" }}>
                        Expires on :
                        <Countdown
                          date={
                            Date.now() +
                            new Date(product.auctionEndTime).getTime() -
                            ms
                          }
                        />
                        {/* {product.auctionEndTime} */}
                      </div>
                    </div>

                    <NavLink
                      className="form-control d-flex justify-content-center form-colors text-white text-decoration-none my-2 py-2 "
                      style={{ height: "45px" }}
                      to={`/Items/${product._id}`}
                    >
                      {" "}
                      submit a bid
                    </NavLink>
                  </div>
                </div>
              );
            })
          )
        )}
      </div>
    </div>
  );
}

export default MostBidding;