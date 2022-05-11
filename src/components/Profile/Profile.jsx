import "./Profile.css"
import axios from 'axios'
import React, { useState, useEffect } from "react";
import MostBidding from '../most bidding card/Bidding-card';




const Profile = () => {
    const [tab , setTab] = useState(1);

    const [user, setuserData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        }
    )

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token);

        const getUser = async () => {
            await axios.get('http://159.223.172.150/api/auth-service/users/current-user/', {

                headers: {
                    'x-access-token': token

                }
            })
                .then(res => {

                    // window.location.reload();
                    setuserData(res.data.user);
                    console.log(res);

                })
                .catch((e) => {

                    console.log(e.response.data);

                })
        }
        getUser();

      

    }, [])

    const TabContent = ()=>{


       if(tab == 1){

        return(
            <div className="container d-flex justify-content-center">
                       
                                <div className="col-lg-8 ">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row card rounded-4  py-2 bg-bg-white my-3 w-75 profile " >
    
                                            <div className="row pb-3 ">
    
                                                <h3 className=" fs-2">Personal info </h3>
    
                                            </div>
                                           
                                                    <div className="row">
                                                        <ul className="list-unstyled">
    
                                                            <li className="mb-2">First Name: {user.firstName}</li>
                                                            <li className="mb-2">Last Name: {user.lastName}</li>
                                                            <li className="mb-2">Age :22</li>
                                                            <li className="mb-2">Adress :alex ,egypt</li>
    
    
    
                                                        </ul>
                                                    </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row card rounded-4  py-2 bg-bg-white my-3 w-75 profile ">
    
                                            <div className="row pb-3 ">
    
                                                <h3 className=" fs-2">Email Adress  </h3>
                                            </div>
    
                                            <div className="row">
                                                <ul className="list-unstyled">
    
                                                    <li className="mb-2">email: {user.email}</li>
    
    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row card rounded-4 py-2 bg-bg-white my-3 w-75 profile">
    
                                            <div className="row pb-3 ">
    
                                                <h3 className=" fs-2">Phone Number </h3>
                                            </div>
    
                                            <div className="row">
                                                <ul className="list-unstyled">
    
                                                    <li className="mb-2">Phone Number:{user.phoneNumber}</li>
    
    
                                                </ul>
                                            </div>
                                        </div>
                                        </div>
                                    
                                    <div className="col-12">
    
                                    </div>
                                </div>
                            </div>
                                

            </div>
        )
       }else if (tab == 2){


        return(
            <div>
          <MostBidding />


            </div>
        )
       }




    }


    
   
 

    return (
        <>



            {/* <div className="profile my-5">

            <div className="card shadow rounded-2 bg-danger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab dignissimos nobis architecto cumque, libero tempora culpa est dolorem, quos velit fugiat exercitationem nihil odit sunt pariatur magni accusamus earum iure, ratione veritatis eligendi doloribus voluptates! Eum adipisci suscipit, rem obcaecati laborum sunt. Enim culpa excepturi illum ex provident? Reprehenderit!

            </div>

            <div className=" card shadow rounded-2 bg-info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis, fuga modi sit obcaecati incidunt dolorem molestiae amet reprehenderit eaque veritatis, numquam dolore pariatur nihil explicabo ab rem vitae libero.

            </div>


        </div>
        </>
    ) */}


            {/* <div className="container my-5">
                <div className="row">

                    <div className="container card rounded-4 mx-5  bg-info"    >
                        <div className="text-center " >
                            <img src="imgs\img.jpg" alt="" className="rounded-circle bg-danger w-25" />
                            <h3> Nahla Samy</h3>
                            <ul className="list-unstyled ">
                                <li className='mb-2'>
                                    <a className='text-decoration-none' href="#"><i class="fa-solid fa-bars-progress "></i>Personal Profile </a>
                                </li>
                                <li className='mb-2'>
                                    <a className='text-decoration-none' href="#"><i class="fa-solid fa-bars-progress "></i>Personal Profile </a>
                                </li>


                            </ul>
                        </div>

                    </div>




                    <div className="container card my-3 mx-5 profile ">
                        <div className="row pb-1">

                            <h3>Personal Details </h3>
                        </div>

                        <div className="row card rounded-4 mx-2 bg-bg-white my-3 py-2  shadow-3 profile ">
                            <ul className="list-unstyled">
                                <li className="mb-2">Name: nahla</li>
                                <li className="mb-2">addres :Alex,egypt</li>
                                <li className="mb-2">BirthDay: 27/7</li>


                            </ul>
                        </div>


                        <div className="row card rounded-4 mx-2 py-2 bg-bg-white my-3 ">

                            <div className="row pb-3 ">

                                <h3 className=" fs-2">Email Adress </h3>
                            </div>

                            <div className="row">
                                <ul className="list-unstyled">

                                    <li className="mb-2">email: nahla@gmail.com</li>


                                </ul>
                            </div>
                        </div>

                        <div className="row card rounded-4 m-2 bg-bg-white p-3 ">

                            <div className="row pb-3 ">

                                <h3 className="fw-fw-normal fs-2">Phone Number </h3>
                            </div>

                            <div className="row">
                                <ul className="list-unstyled">

                                    <li className="mb-2">Phone : 01123568436</li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}







            <section className=" " style={{ marginTop: '5em' }}>
                <div className="container  justify-content-center">
                    <div className="row justify-content-center gx-0">
                        <div className="col-sm-10 col-md-7 col-lg-4  d-flex align-items-stretch ">
                            <div className="card shadow rounded-3 py-4 profile" >
                                <div className="text-center py-2" >
                                    <img src="imgs\img.jpg" alt="" className="rounded-circle w-25" />
                                    <h3> {user.firstName} {user.lastName}</h3>
                                    <ul className="list-unstyled ">
                                        <li className='mb-2' onClick={()=>{ setTab(1) }}>
                                            <a className='text-decoration-none' href="#"><i class="fa-solid fa-bars-progress "></i>Personal Profile </a>
                                        </li>
                                        <li className='mb-2' onClick={ ()=>{ setTab(2)}}>
                                            <a className='text-decoration-none' href="#"><i class="fa-solid fa-bars-progress "></i>Winning page </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                        </div>
                        
                        <TabContent />

                       
                      
   

                        
                            


                      
               
                    </div>
                </div>
            </section>




        </>
    )

}
export default Profile