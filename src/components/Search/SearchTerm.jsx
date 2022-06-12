import { NavLink } from 'react-router-dom';
import Countdown from 'react-countdown';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar';
import axios from "axios";

const SearchTerm = () => {

  const [items, setItemResult] = useState([])
  const {keyWord} = useParams();
  const[empty ,setEmpty]=useState(false);


  useEffect(() => {
    const getItemm = async () => {
      await axios.get('http://159.223.172.150/api/item-service/items?itemName=' + `${keyWord}`)
        .then(res => {
          console.log(res)
          setItemResult(res.data.items)

          if(res.data.items.length === 0  ){
            setEmpty(true)
            console.log("ana fady walahy")
            console.log(res)
          }else{
            setEmpty(false)
          }


        }).catch(err => {
          console.log(err)
        })
    }

    getItemm()
  }, [keyWord])

 



  return (
    <>

      <Navbar />
    
    {empty ? <div className='py-5 my-5  text-center' >
      <h3>no result </h3>
    </div>   :
     <div className="container-fluid">
     <div className=' biid' >

       {items.map((items) => {
         return (
           <div className='  my-4'>

             <div className="Bidding-Card">

               <div className=''>
                 <img className="bidding-img" style={{ borderRadius: '16px 16px 0px 0px' }} src={items.image} alt="watch" height="247px" />
               </div>

               <div>
                 <h4 style={{ fontSize: '10pt', fontWeight: 'bold' }}>{items.name}</h4>
               </div>

               <div className="biddng-price">

                 <div>
                   <img src="imgs\bid.png" width='40px' alt="" />
                   <p style={{ fontSize: '10pt', marginLeft: '5px' }}> <span style={{ fontWeight: 'bold' }}>current Bid: </span> <br /> $5000</p>
                 </div>

                 <div style={{ color: 'crimson' }}>
                   Expires on :
                   <Countdown date={Date.now() + 10000} />
                 </div>

               </div>

               <NavLink className="items-button d-flex justify-content-center" to={`/Items/${items.id}`}> submit a bid</NavLink>
             </div>


           </div>
         )
       })}


     </div>

   </div>
    
    }
     
     






    </>



  );
}

export default SearchTerm;