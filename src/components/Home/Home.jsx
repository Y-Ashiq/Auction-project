import 'bootstrap/dist/css/bootstrap.min.css';
import MostBidding from '../most bidding card/Bidding-card';
import CatCard from '../categories card/Cat-card';
// import Navbar from '../Navbar/Navbar';
import './home.css'


const Home = () => {
  return (

    <>

    

    
      <section className="home-background" style={{marginTop:'5em'}} >
         


        <div className="container ">
          <div className=" row  ">
            <div className="col-xl-7  ">
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
            </div>
          </div>
        </div>



      </section>


      <section>

        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '2em' , marginTop:'2em'}}>Most Bidding</h2>
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

            <CatCard />
            <CatCard />
            <CatCard />
            <CatCard />
            <CatCard />
            <CatCard />

          </div>
        </div>
      </section>

    </>


  );
}

export default Home;