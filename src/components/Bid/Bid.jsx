import "./Bid.css";
import Countdown from "react-countdown";
import Navbar from "../Navbar/Navbar";
import useFetchRitems from "../../API/useFetchRitems";
import { Link } from "react-router-dom";
import useFetchBid from "../../API/useFetchBid";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

import Footer from "../Footer/Footer";
import axios from "axios";

const Bid = () => {
  const url = "http://159.223.172.150/api/auction-service/";
  const { dataa, datab, loading, Cat } = useFetchBid(url);
  const socket = io("http://159.223.99.196:3004");
  const [bidloading, setbidloading] = useState(false);
  const [Bids, setBids] = useState([]);


  const { id } = useParams();

  const userId = JSON.parse(localStorage.getItem("ID"));

  const cat = Cat;

  const { Items } = useFetchRitems(cat);

  const token = JSON.parse(localStorage.getItem("token"));
  const history = useHistory();

  const [Price, setPrice] = useState();

  const d = new Date();
  let ms = d.getTime();

  const ending = new Date(datab.auctionEndTime);
  const res = ending.getTime();

  const result = res - ms;

  const isexp = datab.isExpired;
 

  let timer = Date.now() + result;
  const sendData = () => {
    if (!token) {
      history.push("/login");
    } else {
      socket.emit("bid", {
        auctionID: `${datab._id}`,
        bidderID: userId,
        value: parseInt(Price) ,
      });
      console.log('submited')
    }
  };
  useEffect(() => {
    setbidloading(true);
    const getBidders = async () => {
      await axios
        .get(`http://159.223.172.150/api/bid-service/auctions/${id}/bids`)
        .then((res) => {
          console.log(res);

          setBids(res.data.bids);

    
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    };
    getBidders();
  }, // eslint-disable-next-line 
  [bidloading]
);

  useEffect(()=>{
    const getBids =()=>{

      socket.on("bid-error", (res) => {
        alert(res.message);
        console.log(res);
      });
  
      socket.on("bid-success", (res) => {
        alert(res.message);
        console.log(res);
        setbidloading(false);
      });
      socket.on("bidder-success", (res) => {
        alert(res.message);
        console.log(res);
        setbidloading(false);

      });

    }
    getBids();



// eslint-disable-next-line 
  },[sendData])

  useEffect(() => {
    const Timer = () => {
      if (timer === 0) {
        axios
          .put(
            `http://localhost:3002/api/auction-service/auctions/${id}/close-auction`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    Timer(); // eslint-disable-next-line
  }, [timer]);

 

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div class="d-flex align-items-center my-5">
            <strong className="mx-0">Loading...</strong>
            <div
              class="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-5 ">
          <div className=" viewItemContainer row my-5">
            <div className="col-xl d-flex justify-content-center">
              <img src={dataa.imageURL} style={{ maxWidth:"80%" , maxHeight:"80%" }} alt="" />
            </div>

            <div className="col-xl">
              <h1 className="" style={{ fontWeight: "bold" }}>
                {" "}
                {dataa.name}
              </h1>
              <p>{dataa.description}</p>

              <div className=" d-flex justify-content-around my-5 ">
                <div className="d-flex justify-content-center my-3">
                  <i
                    className="fa fa-gavel mx-2"
                    style={{ fontSize: "35px", color: "crimson" }}
                  ></i>
                  <p> current Bid : {datab.currentPrice}</p>
                </div>

                <div className="d-flex justify-content-center my-3">
                  <i
                    className="fa-solid fa-sack-dollar mx-2"
                    style={{ fontSize: "35px", color: "green" }}
                  ></i>
                  <p>buy now: $10000</p>
                </div>
              </div>
              <div className="d-flex justify-content-around my-3">
                <div style={{ color: "crimson", fontSize: "15pt" }}>
                  Expires on :
                  <Countdown date={timer} />
                </div>

                <p style={{ fontSize: "15pt" }}>
                  number of Bids : {Bids.length}
                </p>
              
              </div>

              <div className="d-flex justify-content-center flex-wrap my-5">
                {isexp ? (
                  <>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      className=" form-control rounded-3 my-3 mx-3 w-50"
                      type="number"
                      name="Price"
                      id=""
                      disabled
                    />
                    <button
                      onClick={sendData}
                      className=" btn text-white rounded-3 my-3 form-colors"
                      disabled
                    >
                      submit a bid
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      className=" form-control rounded-3 my-3 mx-3 w-50"
                      type="number"
                      name="Price"
                      id=""
                    />
                    <button
                      onClick={sendData}
                      className=" btn text-white rounded-3 my-3 form-colors"
                    >
                      submit a bid
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-center my-5">
        <div className="  viewItemContainer d-flex flex flex-column justify-content-center ">
          <h4 className="text-center">Bid History</h4>
          <div className="table-responsive-sm">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {Bids.map((bids) => (
                  <tr>
                    <td>
                      {bids.bidder.firstName} {bids.bidder.lastName}
                    </td>
                    <td>{bids.date.substring(0, 10)}</td>
                    <td>{bids.date.substring(11, 23)} </td>
                    <td>${bids.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Related Items</h2>

      <div className="most-bidding-section" style={{ marginTop: "3em" }}>
        {Items.map((product) => (
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
                    <span style={{ fontWeight: "bold" }}>current Bid: </span>{" "}
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

              <Link
                className="form-control d-flex justify-content-center form-colors text-white text-decoration-none my-2 py-2 "
                style={{ height: "45px" }}
                to={`/Items/${product._id}`}
              >
                submit a bid
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Bid;
