import { NavLink } from 'react-router-dom';
import "./Items.css"
import Countdown from 'react-countdown';
import ReactPaginate from 'react-paginate';
import useFetchItems from '../../API/useFetchItems';
import PaginateItems from '../../Hooks/PaginateItems';
import Navbar from "../Navbar/Navbar";




const Items = () => {
    const url = 'https://fakestoreapi.com/products';
    const { dataa, loading } = useFetchItems(url);



    const itemsPerPage = 10;
    const { pageCount, endOffset, itemOffset, handlePageClick } = PaginateItems(itemsPerPage, dataa);
    window.scrollTo(0, 0);


  


    return (
        <div>

            <Navbar />

            <div className=' biid' >

                {loading ? <div className="d-flex align-items-center">
                    <strong className='mx-3'>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div> : dataa.slice(itemOffset, endOffset).map((product) => {
                    return (
                        <div className='  my-3'>

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

                                <NavLink className="form-control d-flex justify-content-center form-colors text-white text-decoration-none my-2 py-2 " style={{height:'45px'}} to={`/Items/${product.id}`}> submit a bid</NavLink>
                            </div>





                        </div>

                    )
                })}




            </div>



            <div className="container d-flex align-items-center">

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />




            </div>




        </div>










    );
}

export default Items;