import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white mt-5"
      style={{ backgroundColor: "#000000" }}
    >
      <section className="py-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Auction
              </h6>
            
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <NavLink to={'/home'} className="text-reset">
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink to={'/Items'} className="text-reset">
                  Auction
                </NavLink>
              </p>
              <p>
                <NavLink to={'/About'} className="text-reset">
                  About
                </NavLink>
              </p>
              <p>
                <NavLink to={'/login'} className="text-reset">
                  Login
                </NavLink>
              </p>
              <p>
                <NavLink to={'/register'} className="text-reset">
                  Signup
                </NavLink>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p>
                <NavLink to={`/searchTerm/$clothe`} className="text-reset">
                Clothes
                </NavLink>
              </p>
              <p>
                <NavLink to={`/searchTerm/electronics`} className="text-reset">
                  Electronics
                </NavLink>
              </p>
              <p>
                <NavLink to={`/searchTerm/jewelery`} className="text-reset">
                Jewelry
                </NavLink>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Alexandria,Egypt
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                y.alashiq11@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 0106 563 0331
              </p>
              <p>
                <i className="fas fa-print me-3"></i> 0155 733 3824
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2022 Copyright:
        <NavLink className="text-reset line" to={{}}>
          THE NINJAS
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
