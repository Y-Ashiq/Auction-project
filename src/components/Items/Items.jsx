import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Countdown from 'react-countdown';
import "./Items.css"
import { NavLink } from 'react-router-dom';

const Items = () => {


    const [dataa, setData] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(async () => {

        setloading(true)
        await axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setData(res.data)

                console.log(res)
                setloading(false)



            }).catch(err => {
                console.log(err)
            })



    }, [])



    return (
        <div className='d-flex justify-content-center'>
            <div className=' biid' >

                {loading ? <div class="d-flex align-items-center">
                    <strong className='mx-3'>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div> : dataa.map((product) => {
                    return (
                        <div className='  my-4'>

                            <div className="Bidding-Card">

                                <div className=''>
                                    <img className="bidding-img" style={{ borderRadius: '16px 16px 0px 0px' }} src={product.image} alt="watch" height="247px" />
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '10pt', fontWeight: 'bold' }}>{product.title.substring(0, 11)}</h4>
                                </div>

                                <div className="biddng-price">

                                    <div>
                                        <img src="imgs\bid.png" width='40px' alt="" />
                                        <p style={{ fontSize: '10pt', marginLeft: '5px' }}> <span style={{ fontWeight: 'bold' }}>current Bid: </span> <br /> $5000</p>
                                    </div>

                                    <div style={{ color: 'crimson' }}>
                                        Expires on :
                                        <Countdown date={Date.now() + 10000} />
                                    </div>

                                </div>

                                <NavLink className="items-button d-flex justify-content-center" to={`/Items/${product.id}`}> submit a bid</NavLink>
                            </div>


                        </div>
                    )
                })}


            </div>


        </div>








    );
}

export default Items;