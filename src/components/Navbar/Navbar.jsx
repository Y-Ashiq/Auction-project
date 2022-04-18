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
            <nav className="navbar navbar-expand-lg  navbar-light bg-white fixed-top ">
                <div className="container-fluid" >
                    <a className="navbar-brand bolding me-5" >Auction</a>

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <form class="d-flex me-auto w-100">
                            <input class="form-control me-2" type="search" placeholder="Search items , categories" aria-label="Search" />
                            
                        </form>

                        <ul className="navbar-nav align-content-center ms-5">

                            <li className="nav-item">

                                <a className="nav-link d-flex  me-3 " >
                                    Home
                                </a>
                            </li>
                            
                            <li className="nav-item ">

                                <a className="nav-link d-flex  me-3 " >
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link d-flex  me-3 " >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link d-flex  me-3 " >
                                    Contact 
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