import 'bootstrap/dist/css/bootstrap.min.css';
import MostBidding from '../most bidding card/Bidding-card';
import CatCard from '../categories card/Cat-card.jsx'
import Navbar from '../Navbar/Navbar';
import './home.css'


const Home = () => {
  return (

    <>
      <Navbar />




      <section className="home-background " >

        <div >
          <img className='img-fluid my-5' style={{ width: '100%' }} src="imgs/auc_auto_x2.png" alt="" />

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


      <section >

        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Most Bidding</h2>
          <div className="most-bidding-section">

            <MostBidding />
            <MostBidding />
            <MostBidding />

          </div>
        </div>

      </section>


      <section >

        <div style={{ marginTop: '5em', paddingBottom: '5em' }}>

          <h2 style={{ textAlign: 'center', paddingTop: '2em', paddingBottom: '1em' }}>Categories</h2>

          <div className="cat-section">
            <CatCard name=" Cars" imageSrc="imgs\car.jpeg" />
            <CatCard name="Antique" imageSrc="imgs\Antique.jpg" />
            <CatCard name="Art" imageSrc="imgs\Art.jpg" />
            <CatCard name="Coin" imageSrc="imgs\coin.jpg" />
            <CatCard name="Elctronic" imageSrc="imgs\electronic.jpg" />
            <CatCard name="Furniture" imageSrc="imgs\furniture.jpg" />




          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">

              <form className="text-center border border-light p-5 shadow-1" action="#!">

                <p className="h4 mb-4">Contact us</p>


                <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />


                <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />


                <label>Subject</label>
                <select className="browser-default custom-select mb-4">
                  <option value="" disabled>Choose option</option>
                  <option value="1" selected>Feedback</option>
                  <option value="2">Report a bug</option>
                  <option value="3">Feature request</option>
                  <option value="4">Feature request</option>
                </select>


                <div className="form-group">
                  <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
                </div>


                


                <button className="btn btn-dark btn-block w-50" type="submit">Send</button>

              </form>
            </div>
            <div className="col">
              <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.174055028024!2d30.00026915099201!3d31.271280366436656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d00aa772c083%3A0xb24c29d6573f88d1!2z2LXYp9mE2Kkg2YXZitin2YXZiiDZhNmE2YXYstin2K_Yp9iq!5e0!3m2!1sen!2seg!4v1654730276881!5m2!1sen!2seg" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>


  );
}

export default Home;