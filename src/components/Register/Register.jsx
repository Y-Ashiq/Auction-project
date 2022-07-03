import React from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Register(props) {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  function getUser({ target }) {
    setUser({ ...user, [target.name]: target.value });
  }
  console.log(user);

  async function sendData(e) {
    e.preventDefault();
    await axios
      .post("http://159.223.172.150/api/auth-service/users/register ", user)
      .then((res) => {
        props.history.replace("/login");
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response.data);
        setError(e.response.data.message);
      });
  }
  return (
    <>
      <Navbar />

      <section className="mt-5 pt-5">
        <div className=" d-flex justify-content-center align-items-center  ">
          <div className="col-xl-10">
            <div
              className=" card shadow text-black "
              style={{ borderRadius: "15px" }}
            >
              <div className="row g-0">
                <div className="col-lg-6 ">
                  <div className="p-md-5 mx-md-4">
                    {/* <div className="text-center pb-2">
                                            <p> SIGN UP WITH</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div> */}

                    <form onSubmit={sendData} className="text-center px-2">
                      <p> create your account </p>
                      <div className="row">
                        <div className=" col-md-6 mb-4">
                          <input
                            onChange={getUser}
                            type="text"
                            name="firstName"
                            className="form-control rounded-3"
                            placeholder="First name"
                          />
                        </div>
                        <div className=" col-md-6 mb-4">
                          <input
                            onChange={getUser}
                            type="text"
                            name="lastName"
                            className="form-control rounded-3"
                            placeholder="last name"
                          />
                        </div>
                      </div>
                      <div className=" mb-4">
                        <input
                          onChange={getUser}
                          type="email"
                          name="email"
                          className="form-control rounded-3"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4 ">
                        <input
                          onChange={getUser}
                          type="tel"
                          name="phoneNumber"
                          id="form3Example3"
                          className=" form-control rounded-3"
                          placeholder="phone number"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          onChange={getUser}
                          type="password"
                          name="password"
                          id="form2Example22"
                          className=" form-control rounded-3"
                          placeholder="Password"
                        />
                      </div>

                      <div className="m-4  text-center">
                        <input
                          className="btn gg btn-lg text-white rounded-3 form-colors"
                          type="submit"
                          value="Sign up "
                        />
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">ALready Have an account?</p>
                        <NavLink
                          to={"/login"}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Sign in
                        </NavLink>
                      </div>
                    </form>
                    {error && (
                      <div className="alert alert-danger text-center text-white">
                        {error}
                      </div>
                    )}
                  </div>
                </div>

                <div className=" bg-image col-lg-6 d-flex form-side ">
                  {/* <img style={{objectFit:'none' }} className=" bg-image" src="https://mocah.org/thumbs/5385252-portrait-painting-framed-portrait-spotlight-van-gogh-black-dark-light-art-artist-modernity-gogh-van-vincent-creative-commons-images.jpg" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
