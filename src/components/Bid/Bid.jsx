import "./Bid.css";
import Countdown from 'react-countdown';
import MostBidding from '../most bidding card/Bidding-card';
import Navbar from "../Navbar/Navbar";



import useFetchBid from "../../API/useFetchBid";
import { useState } from "react";
import { useHistory } from 'react-router-dom';





const Bid = () => {
    const url = 'https://fakestoreapi.com/products/';
    const { dataa, loading } = useFetchBid(url);


    const [bid, setbids] = useState(3);
    const token = JSON.parse(localStorage.getItem('token'))
    const history = useHistory();






    return (
        <>
            <Navbar />


            {loading ?

                <div className="d-flex justify-content-center my-5">
                    <div class="d-flex align-items-center my-5">
                        <strong className='mx-0'>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center my-5 ">

                    <div className=" viewItemContainer row my-5">

                        <div className="col-xl d-flex justify-content-center">

                            <img src={dataa.image} style={{ width: '70%', height: 'auto' }} alt="" />
                            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <img className="d-block w-100 " src="imgs/car1.jpg" alt="" />
                                    </div>

                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="imgs/car2.jpg" alt="" />
                                    </div>

                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="imgs/car3.jpg" alt="" />
                                    </div>

                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="imgs/car4.jpg" alt="" />
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                </button>

                            </div> */}


                        </div>

                        <div className="col-xl">

                            {/* <h1 className="" style={{ fontWeight: 'bold' }}> mercedes car 1979</h1> */}
                            <h1 className="" style={{ fontWeight: 'bold' }}> {dataa.title}</h1>
                            <h4>description:</h4>
                            <p>{dataa.description}</p>

                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa a atque aperiam repudiandae placeat error explicabo iusto distinctio optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa a atque aperiam repudiandae placeat error explicabo iusto distinctio optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima voluptas eum quod architecto debitis libero? Ipsa, odit impedit ab inventore a animi laborum blanditiis architecto laudantium labore? Nihil modi praesentium consequuntur consectetur ratione tempora eius voluptas sequi vel non, reprehenderit esse qui id debitis eum mollitia repellat! Ad, consectetur!</p> */}

                            <div className=" d-flex justify-content-around ">

                                <div className="d-flex justify-content-center my-3">

                                    <i className="fa fa-gavel mx-2" style={{ fontSize: '35px', color: 'crimson' }}></i>
                                    <p> current Bid : {dataa.price}</p>
                                    {/* <p >current Bid: $5000</p> */}
                                </div>

                                <div className="d-flex justify-content-center my-3">

                                    <i className="fa-solid fa-sack-dollar mx-2" style={{ fontSize: '35px', color: 'green' }} ></i>
                                    <p >buy now: $10000</p>

                                </div>
                            </div>
                            <div className="d-flex justify-content-around my-3" >

                                <div style={{ color: 'crimson', fontSize: '15pt' }}>
                                    Expires on :
                                    <Countdown date={Date.now() + 10000} />

                                </div >


                                <p style={{ fontSize: '15pt' }}>number of Bids :{bid}</p>
                            </div>

                            <div className="d-flex justify-content-center flex-wrap">

                                <input className=" form-control rounded-3 my-3 mx-3 w-50"  type="number" name="name" id="" />

                                <button onClick={() => {
                                    if (!token) { history.push('/login'); }
                                    else { setbids(bid + 1) }
                                }} className=" btn text-white rounded-3 my-3 form-colors"  >submit a bid</button>

                            </div>


                        </div>




                    </div>



                </div>}

            <div className="container viewItemContainer d-flex flex flex-column justify-content-center my-5" >
                <h4 className="text-center">Bid History</h4>
                <div className="table-responsive-sm">
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark Spector</td>
                            <td>01/03/2022</td>
                            <td>02:45:25 PM	</td>
                            <td>$7000</td>

                        </tr>
                        <tr>
                            <td>Steven Grant</td>
                            <td>27/07/2022</td>
                            <td>02:45:25 PM</td>
                            <td>$5000</td>
                        </tr>

                        <tr>
                            <td>Jake Lockley</td>
                            <td>06/16/2021</td>
                            <td>02:45:25 PM</td>
                            <td>$5000</td>
                        </tr>

                    </tbody>
                </table>
                </div>
             
            </div>


            <h2 style={{ textAlign: 'center' }}>Related Items</h2>

            <div className="most-bidding-section" style={{ marginTop: '3em' }}>

                <MostBidding />
                <MostBidding />
                <MostBidding />

            </div>







        </>
    );

}

export default Bid;