import React, { Component } from 'react'
import axios from 'axios'
import "./register.css"
export default class Register extends Component {


    user = {
        firstclassName: "",
        lastclassName: "",
        email: "",
        password: "",
        phoneNumber: "",

    }
    getFormData = (e) => {
        this.user[e.target.className] = e.target.value

        console.log(this.user)
    }
    sendData = async (e) => {
        e.preventDefault()
        let { data } = await axios.post(" http://137.184.104.132/api/auth/users/register", this.user)
        console.log(data)
        if (data.accepted = true) {
            e.target.reset()
        }
        console.log(data);
    }

    render() {
        return (
            <>
                <div className="container py-5 h-100 ">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow  card-registration" style={{ width: ' 30' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={this.sendData}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" for="firstclassName">First Name</label>
                                                    <input onChange={this.getFormData} type="text" name="firstName" className="form-control form-control-lg" />

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" for="lastclassName">Last Name</label>
                                                    <input onChange={this.getFormData} type="text" name="lastName" className="form-control form-control-lg" />

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" for="emailAddress">Email</label>
                                                    <input onChange={this.getFormData} type="email" name="email"
                                                        className="form-control form-control-lg" />

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" for="phoneNumber">Phone Number</label>
                                                    <input onChange={this.getFormData} type="tel" name="phoneNumber" className="form-control form-control-lg" />

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" for="Password">Password</label>
                                                    <input onChange={this.getFormData} type="password" name="password" className="form-control form-control-lg" />

                                                </div>


                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" for="Password">Confirm Password</label>
                                                    <input onChange={this.getFormData} type="password" name="confirmPassword" className="form-control form-control-lg" />

                                                </div>


                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
