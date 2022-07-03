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
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Auction
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Signup
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p>
                <a href="#!" className="text-reset">
                Cothe
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Jewelry
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
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
