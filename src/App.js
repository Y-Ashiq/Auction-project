import React, { Component } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import { Redirect, Route, Switch } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Bid from './components/Bid/Bid';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
             <>
                < Navbar/>
                < Switch >

                    < Route path="/home" component={Home}/> 
                    < Route path="/register" component={Register} /> 
                    < Route path="/login" component={Login} /> 
                    < Route path="/Bid" component={Bid} />
                     <Redirect exact from="/" to="/home" />
                    < Route path="*" component={NotFound} />
                 </Switch>

                 <Footer />

                    </>
           
      );
    }
}

 export default App;