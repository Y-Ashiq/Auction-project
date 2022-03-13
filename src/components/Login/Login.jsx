import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    state={ errorMessage: "" }
    user={
       
        email:"",
        password:"",

    }
    getFormData = (e) => {
        this.user[e.target.name]=e.target.value
        console.log(this.user)
    }
    sendData=async (e) => {
        e.preventDefault()
      let {data} =await axios.post("http://137.184.104.132/api/auth/users/login",this.user)
      if(data.accepted = true){
          localStorage.setItem("token", data.token)
          this.props.replace("/home")
      }
      else{
          this.setState({
              errorMessage:data.message
          })
      }
      console.log(data);
    }
    render() {
        return (
            <>
           
            </>
        );
    }
}

export default Login;