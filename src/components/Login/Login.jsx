import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {
  state = { errorMessage: ' ' }

  user = {

    email: " ",
    password: " ",

  }
  getFormData = (e) => {
    this.user[e.target.name] = e.target.value
    console.log(this.user)
  }

  sendData = async (e) => {
    e.preventDefault()
    const data2 = {
      email: this.email,
      password: this.password
    }

    await axios.post("http://159.223.172.150/api/auth-service/users/login", this.user)
      .then((res) => {
        if (data2.accepted = true) {

          localStorage.setItem("token", data2.token)
          this.props.history.replace("/Home")
          console.log(res)
        }


      })
      .catch((e) => {

        console.log(e.response.data);
        this.setState({ errorMessage: e.response.data.message })

      })
    // if (data.accepted = true) {
    //   localStorage.setItem("token", data.token)
    //   console.log("tmam")
    //   // this.props.history.replace("/Home")
    //  // this.props.history.push("/Home")
    // }
    // else {
    //     this.setState({
    //     errorMessage:data.message 
    //   })
    // }
    // console.log(data);
  }
  render() {
    return (
      <>


        <section className=" m-5" >
          <div >
            <div className="row d-flex justify-content-center align-items-center m-5 py-5 ">
              <div className="col-xl-10 ">
                <div className=" card shadow text-black " style={{ borderRadius: '15px' }}>
                  <div className="row g-0">
                    <div className="col-lg-6 ">
                      <div className="p-md-5 mx-md-4">

                        <div className="text-center pb-2">
                          <p> SIGN IN:</p>
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
                        </div>

                        <form className="text-center " onSubmit={this.sendData}>
                          <p> or use your account </p>
                          <label className="form-label " for="form2Example11">email</label>
                          <div className="form-outline mb-4">
                            <input onChange={this.getFormData} type="email" name='email' id="form2Example11" className=" auction-input " />
                          </div>

                          <label className="form-label " for="form2Example22">Password</label>
                          <div className="form-outline mb-4">
                            <input onChange={this.getFormData} type="password" name='password' id="form2Example22" className="auction-input " />

                          </div>




                          <div style={{ color: 'crimson' }}> {this.state.errorMessage}</div>

                          <div className="m-4  text-center" >

                            <input className="btn gg btn-lg text-white rounded-pill form-colors" type="submit" value="Log in " />
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button type="button" className="btn btn-outline-danger">Create new</button>
                          </div>

                        </form>

                      </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2 form-side " >
                      <div class="text-white px-3 py-4 p-md-5 mx-md-4 ">
                        <h4 class="mb-4 text-white bolding">we offer the best for you</h4>
                        <p class="small mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default Login;