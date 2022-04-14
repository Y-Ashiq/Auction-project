import React, { Component } from 'react'
import axios from 'axios'
import './register.css'

export default class Register extends Component {



    state = { errorMessage: ' ' }
    user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",

    }
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user)
    }

    sendData = async (e) => {

        e.preventDefault()
        const data = { ...this.user }

        await axios.post("http://159.223.172.150/api/auth-service/users/register", this.user)
            .then((res) => {

                if (data.accepted == true) {
                    e.target.reset()
                }
                console.log(res)



            }).catch((e) => {

                this.setState({ errorMessage: e.response.data.message });

                console.log(e.response.data);



            })
        console.log(data)
        // if (data.accepted == true) {
        //     e.target.reset()
        //     console.log(data)
        // }

    }

    render() {
        return (
            <>

                <section className="m-5">
                    <div className="row d-flex justify-content-center align-items-center   ">
                        <div className="col-xl-10">
                            <div className=" card shadow text-black "
                                style={{ borderRadius: '15px' }}>
                                <div className="row g-0">
                                    <div className="col-lg-6 ">
                                        <div className="p-md-5 mx-md-4">

                                            <div className="text-center pb-2">
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
                                            </div>

                                            <form onSubmit={this.sendData} className="text-center">
                                                <p> or create your account </p>
                                                <div className="row">
                                                    <div className=" col-md-6 mb-4">
                                                        <input onChange={this.getFormData} type="text" name="firstName" className="form-control rounded-pill" placeholder="First name" />

                                                    </div>
                                                    <div className=" col-md-6 mb-4">

                                                        <input onChange={this.getFormData} type="text" name='lastName' className="form-control rounded-pill" placeholder="last name" />

                                                    </div>
                                                </div>
                                                <div className=" mb-4">

                                                    <input onChange={this.getFormData} type="email" name="email" className="form-control rounded-pill" placeholder="Email" />

                                                </div>
                                                <div className="mb-4 ">

                                                    <input onChange={this.getFormData} type="tel" name='phoneNumber' id="form3Example3" className=" form-control rounded-pill" placeholder="phone number" />

                                                </div>




                                                <div className="mb-4">

                                                    <input onChange={this.getFormData} type="password" name='password' id="form2Example22" className=" form-control rounded-pill" placeholder="Password" />

                                                </div>
                                                <div style={{ color: 'crimson' }}>{this.state.errorMessage}</div>


                                                <div className="m-4  text-center">
                                                    <input className="btn gg btn-lg text-white rounded-pill form-colors" type="submit" value="Sign up " />
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">Create new</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2 form-side">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4 bolding">we offer the best for you</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        )
    }
}
