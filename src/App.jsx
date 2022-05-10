import { Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Bid from './components/Bid/Bid';
import About from './components/About/About';
import Items from './components/Items/Items'
// import Footer from './components/Footer/Footer';
import CreateAuction from './components/create/CreateAuction';
import Profile from './components/Profile/Profile'
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

const App = () => {

 

    return (
      <>

        <Navbar />

        < Switch >
         <ProtectedRoutes path="/Profile" component={Profile} />
          < Route path="/home" component={Home} />
          < Route path="/Profile" component={Profile} />
          < Route path="/register" component={Register} />
          < Route path="/login" component= {Login}/>
          < Route path="/Items/:id" component={Bid} />
          < Route path="/createAuction" component={CreateAuction} />
          < Route path="/About" component={About} />
          < Route path="/Items" component={Items} />
          
          
          < Redirect exact from="/" to="/home" />
          < Route path="*" component={NotFound} />

        </Switch>



      </>
    );

  

}

export default App;
