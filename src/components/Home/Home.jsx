import 'bootstrap/dist/css/bootstrap.min.css';
import MostBidding from '../most bidding card/Bidding-card';
import CatCard from '../categories card/Cat-card';


const Home = () => {
    return (
 
      <div className="home">

        <section className="home-background">

        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                {/* <img src="" height="35px" alt="LOGO" /> */}
                <p>AUCTION</p>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>

                </ul>
                <ul className="navbar-nav flex-row">

                    <li className="nav-item  me-4 ">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="fas fa-search"></i></span>
                        </a>
                    </li>

                    <li className="nav-item  me-4">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="far fa-user "></i></span>
                        </a>
                    </li>

                    <li className="nav-item  me-4">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="fas fa-shopping-bag"></i></span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
        <div className="container " style={{marginTop: '5em'}}>
          <div className=" row ">
            <div className="col-xl-7  ">
              <p style={{fontSize: '30pt', color: 'white'}}>Welcome to our online auction website ,are you ready for
                your
                next deal!</p>
            </div>
            <div className="col-xl-5">
              <div className="card" style={{width: '25rem'}}>
                <img src="imgs\slaves.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">slaves for sale!.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

              
              
            </section>

              
        <section>

     <div style={{marginTop: '5em'}}>
        <h2 style={{textAlign: 'center', marginBottom: '2em'}}>Most Bidding</h2>
        <div className="most-bidding-section">

        <MostBidding/>
        <MostBidding/>
        <MostBidding/>
          
        </div>
      </div>

          </section>
 


       <section style={{backgroundColor: '#F3FBFE'}}>

        <div style={{marginTop: '5em' , paddingBottom: '5em'}}>

          <h2 style={{textAlign: 'center', paddingTop: '2em', paddingBottom: '1em'}}>Categories</h2>

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

      
    </div>

      );
}
 
export default Home;