import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";
import { NavLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

const Navbar = () => {
  const txt = "nav-link d-flex  me-3 bolding2 ";

  const [userData, setuserData] = useState();
  const history = useHistory();

  const [isLogged, setLogged] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    const getUser = async () => {
      await axios
        .get("http://159.223.172.150/api/auth-service/users/current-user/", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((res) => {
          // window.location.reload();
          setuserData(res.data.user.firstName);
          console.log(res);
          localStorage.setItem("ID", JSON.stringify(res.data.user._id));
        })
        .catch((e) => {
          console.log(e.response);
        });
    };
    getUser();

    if (token) {
      setLogged(true);
    }
  }, []);

  function logout(e) {
    e.preventDefault();

    setLogged(false);
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
    window.location.reload();
    alert("You logged out");
  }

  function checkpress(e) {
    if (e.key === "Enter") {
      history.push(`/searchTerm/${searchTerm}`);
    }
  }

  console.log(searchTerm);

  return (
    <>
      {/* f7f6fb*/}

      <nav
        className="navbar navbar-expand-lg  navbar-light  fixed-top "
        style={{ background: "#f7f6fb" }}
      >
        <div className="container-fluid">
          <NavLink to={"/home"} className="navbar-brand bolding me-5">
            Auction
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex me-auto w-100">
              <input
                onKeyDown={(e) => {
                  checkpress(e);
                }}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                class="form-control me-2"
                type="search"
                placeholder="Search items , categories"
                aria-label="Search"
              />
              <NavLink
                to={`/searchTerm/${searchTerm}`}
                className="btn btn-success "
                style={{ backgroundColor: "#181818" }}
              >
                Search
              </NavLink>
            </form>

            {/* <MContext.Consumer>
                            {(context) => (
                                <button onClick={() => {
                                    console.log("hello")
                                    context.setMessage(searchTerm)
                                }}> Send</button>
                            )}
                        </MContext.Consumer> */}

            <ul className="navbar-nav align-content-center ms-5">
              <li className="nav-item ">
                <NavLink to={"/home"} className={txt}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink to={"/items"} className={txt}>
                  Auctions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className={txt}>
                  About
                </NavLink>
              </li>

              {isLogged ? (
                <li>
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <NavLink
                        to={"/home"}
                        className="nav-link dropdown-toggle"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Hello,{userData}
                      </NavLink>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <NavLink to={"/Profile"} className="dropdown-item">
                            profile
                          </NavLink>
                        </li>
                        <li>
                          <button
                            className="dropdown-item "
                            style={{ color: "red" }}
                            onClick={(e) => logout(e)}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* <button onClick={(e) => logout(e)}>Logout</button> */}
                  {/* <NavLink to={"/home"}> {userData}</NavLink> */}
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to={"/login"}
                    className="nav-link d-flex align-items-center me-3"
                  >
                    <i className="fa-regular fa-circle-user fa-2xl"></i> <br />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
