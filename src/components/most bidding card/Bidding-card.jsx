import './Bidding-card.css'
import Countdown from 'react-countdown';

const MostBidding = () => {
    return ( 

        <div>
            <div className="Bidding-Card">
            <div>
              <img   className="bidding-img" style={{borderRadius: '16px 16px 0px 0px'}} src="imgs\img.jpg" alt="watch" />
            </div>
            <div>
              <h4>2018 Hyundai Sonata</h4>
            </div>
            <div className="biddng-price">
              <div>
                <img src="imgs\bid.png" width='40px' alt="" />
                <p style={{fontSize: '10pt'}}>current price</p>
              </div>
              <div>
                <img src="imgs\money-bag.png" width='40px' alt="" />
                <p style={{fontSize: '10pt'}}>bid price</p>
              </div>
              <div style={{color:'crimson'}}>
              <Countdown date={Date.now() + 10000} />
              </div>
              <div style={{color:'green'}}>
              30 bids
              </div>
            </div>
            <button className="auction-button"> submit a bid</button>
          </div>
        </div>
     );
}
 
export default MostBidding;