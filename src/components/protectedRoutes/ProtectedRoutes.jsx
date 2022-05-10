import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import jwt_decode from "jwt-decode";

export default class ProtectedRoutes extends Component {
    render() {
        let token = localStorage.getItem("token");
        try {
            var decoded = jwt_decode(token);
            console.log(decoded)
        } catch (error) {
            localStorage.clear()
            return (
                <Redirect to="./login" />
            )
        }
       
        console.log(this.props);
        if (token) {
            return (
                <Route path={this.props.path} component={this.props.component} />

            )
        } else {
            return (
                <Redirect to="./login" />
            )
        }
    }
} 