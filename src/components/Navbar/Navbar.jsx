import React, { useState } from "react";
import './navbar.css'

const Navbar = () => {
    // const [color,setColor] =useState(false);

    // const colorChange =() =>{

    //     if(window.scrollY >= 0){

    //         setColor(true);

    //     }else{
    //         setColor(false)
    //     }
    // }

    // window.addEventListener('scroll',colorChange);


    return (



        <div>
            <nav className="navbar navbar-expand-lg  navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand bolding" >Auction</a>

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <form className="d-flex align-items-center w-100 form-search">
                            <div className="input-group">

                                <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                            </div>
                            <a  className="text-dark"><i className="fas fa-search ps-3"></i></a>
                        </form>

                        <ul className="navbar-nav ms-3 ">

                            <li className="nav-item">

                                <a className="nav-link d-flex align-items-center me-3 bolding2" >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link d-flex align-items-center me-3 bolding2" >
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link d-flex align-items-center me-3 bolding2" >
                                    About
                                </a>
                            </li>

                            <li className="nav-item">

                                <a className="nav-link d-flex align-items-center me-3" >
                                    <i className="fa-regular fa-circle-user fa-2xl"></i> <br />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>




        </div>


    );
}

export default Navbar;