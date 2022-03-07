const Home = () => {
    return (
 
      <div className="home">

      <div style={{marginTop: '5em'}}>
        <h2 style={{textAlign: 'center', marginBottom: '2em'}}>Most Bidding</h2>
        <div className="most-bidding-section">
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
      </div>


      <section style={{backgroundColor: '#F3FBFE'}}>

        <div style={{marginTop: '10em'}}>

          <h2 style={{textAlign: 'center', paddingTop: '2em', paddingBottom: '1em'}}>Categories</h2>

          <div className="cat-section">
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg" alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg" alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg"  alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg" alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg" alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
            <div className="cat-cards">
              <img src="imgs\old-cars.jpg" alt="" />
              <h3 style={{textAlign: 'center', paddingTop: '10px', fontSize: '18pt'}}>cars</h3>
            </div>
          </div>
        </div>
      </section>
    </div>

      );
}
 
export default Home;