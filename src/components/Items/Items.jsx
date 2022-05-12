import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Countdown from 'react-countdown';
import "./Items.css"
import { NavLink } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';


const Items = () => {


    const [dataa, setData] = useState([]);
    const [loading, setloading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);





    useEffect(() => {

        setloading(true)

        const AuctionItems = async () => {

            await axios.get('https://fakestoreapi.com/products')
                .then(res => {
                    setData(res.data)

                    console.log(res)
                    setloading(false)



                }).catch(err => {
                    console.log(err)
                })


        }

        AuctionItems();

    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div>
            <div className=' biid' >

                {loading ? <div class="d-flex align-items-center">
                    <strong className='mx-3'>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div> : dataa.slice(indexOfFirstPost, indexOfLastPost).map((product) => {
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
                                        <p style={{ fontSize: '10pt', marginLeft: '5px' }}> <span style={{ fontWeight: 'bold' }}>current Bid: </span> <br /> ${product.price}</p>
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
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={dataa.length}
                paginate={paginate}
            />


        </div>










    );
}

export default Items;