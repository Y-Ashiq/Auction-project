const MostBidding = () => {
    return ( 

        <div>
            <div className="Bidding-Card">
            <div className="bidding-img">
              <img style={{borderRadius: '16px 16px 0px 0px'}} src="imgs\img.jpg" alt="watch" />
            </div>
            <div>
              <h4>smart watches</h4>
            </div>
            <div className="biddng-price">
              <div>
                <img src="imgs\bid.png" alt="" />
                <p style={{fontSize: '10pt'}}>current price</p>
              </div>
              <div>
                <img src="imgs\money-bag.png" alt="" />
                <p style={{fontSize: '10pt'}}>bid price</p>
              </div>
            </div>
            <button className="bttn"> submit a bid</button>
          </div>
        </div>
     );
}
 
export default MostBidding;