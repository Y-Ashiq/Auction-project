import 'bootstrap/dist/css/bootstrap.min.css';
import MostBidding from '../most bidding card/Bidding-card';
import CatCard from '../categories card/Cat-card.jsx'
// import Navbar from '../Navbar/Navbar';
import './home.css'


const Home = () => {
  return (

    <>


    
      <section className="home-background " >
         
        <div >
            <img className='img-fluid my-5' style={{width:'100%'}}  src="imgs/auc_auto_x2.png" alt="" />

            {/* <div className="col-xl-7  ">
              <p style={{ fontSize: '30pt', color: 'black' }}>Welcome to our online auction website ,are you ready for
                your
                next deal!</p>
            </div>
            <div className="col-xl-5">
              <div className="card" style={{ width: '25rem' }}>
                <img src="imgs\watch.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">wow!</p>
                </div>
              </div>
            </div> */}
        </div>



      </section>


      <section>

        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Most Bidding</h2>
          <div className="most-bidding-section">

            <MostBidding />
            <MostBidding />
            <MostBidding />

          </div>
        </div>

      </section>



      <section style={{ backgroundColor: '#F3FBFE' }}>

        <div style={{ marginTop: '5em', paddingBottom: '5em' }}>

          <h2 style={{ textAlign: 'center', paddingTop: '2em', paddingBottom: '1em' }}>Categories</h2>

          <div className="cat-section">
            <CatCard name=" Cars"  imageSrc="imgs\car.jpeg"/>
            <CatCard name="Antique" imageSrc="imgs\Antique.jpg"/>
            <CatCard name="Art" imageSrc="imgs\Art.jpg"/>
            <CatCard name="Coin" imageSrc="imgs\coin.jpg"/>
            <CatCard name="Elctronic" imageSrc="imgs\electronic.jpg"/>
            <CatCard name="Furniture" imageSrc="imgs\furniture.jpg"/>
            

       

          </div>
        </div>
      </section>

    </>


  );
}

export default Home;