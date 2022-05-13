import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Login = () => {


  const history = useHistory();


  const [logInUser, setlogInUser] = useState(
    {
      email: ' ',
      password: ' '
    }
  );

  const [errorMssg, seterrorMssg] = useState(" ");


  const getFormData = (e) => {

    const data = { ...logInUser };
    data[e.target.name] = e.target.value;

    setlogInUser(data);
    console.log(data);


  }
  

  const sendData = async (e) => {
    
    e.preventDefault();

    await axios.post("http://159.223.172.150/api/auth-service/users/login", logInUser)
      .then(res => {

        localStorage.setItem("token", JSON.stringify(res.data.token));

        history.push('/home');
        window.location.reload();
      

        console.log(res);
        console.log(res.data.token);
        // setTok(res.data.token);

        

      })
      .catch((e) => {

        console.log(e.response.data);

        seterrorMssg(e.response.data.message);

      })
  };


  return (
    <>


      <section className=" m-5" >
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

                    <form className="text-center " onSubmit={(e) => sendData(e)}>
                      <p> or use your account </p>
                      <label className="form-label " for="form2Example11">email</label>
                      <div className=" mb-4">
                        <input onChange={(e) => getFormData(e)} type="email" name='email'className=" form-control rounded-pill " />
                      </div>

                      <label className="form-label " for="form2Example22">Password</label>
                      <div className="-4">
                        <input onChange={(e) => getFormData(e)} type="password" name='password'  className="form-control rounded-pill " />

                      </div>




                      <div style={{ color: 'crimson' }}> {errorMssg}</div>

                      <div className="m-4  text-center" >

                        <input className="btn btn-lg text-white rounded-pill form-colors" type="submit" value="Log in " />
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <NavLink to={"/register"} type="button" className="btn btn-outline-danger">Create new</NavLink>
                      </div>

                    </form>

                  </div>

                </div>

                <div class="bg-image col-lg-6 d-flex align-items-center gradient-custom-2 form-side " >
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
      </section>

    </>
  );
}

export default Login;

