import { useState } from "react";
import axios from 'axios';
import "./craete_auction.css";

const CreateAuction = () => {


    // const [name, setname] = useState("");
    // const [auctionID, setauctionID] = useState("");
    // const [description, setdescription] = useState("");
    // const [category, setcategory] = useState("");
    // const [condition, setcondition] = useState("");

    const [auctionImage, setauctionImage] = useState([]);
    const [errHandler, setErrHandler] = useState("");

    const [item, setItem] = useState({
        name: "",
        auctionID: "",
        description: "",
        category: "",
        condition: ""
    });





    const formData = new FormData();




    const imgFormData = (e) => {

        setauctionImage(e.target.files);

        console.log(e.target.files);



    }

    function Status() {
        
        if (auctionImage.length < 5) {

            return (
                <div>
                      <p> upload at least 5 images </p>
                      <p> {auctionImage.length} images uploaded</p>
                </div>
           
            
            );
        } else{
            return(
                <div>
                <p> {auctionImage.length} images uploaded</p>
          </div>
            )


        }
    }


    const getFormData = (e) => {
        const data = { ...item };
        data[e.target.name] = e.target.value;



        setItem(data);

        console.log(data);
    }




    const createauc = async () => {



        formData.append('auctionID', item.auctionID);
        formData.append('name', item.name);
        formData.append('description', item.description);

        for (let i = 0; i < auctionImage.length; i++) {

            formData.append(`auctionImage[${i + 1}]`, auctionImage[i]);



        }

        formData.append('condition', item.condition);
        formData.append('category', item.category);

        await axios.post("http://159.223.172.150/api/item-service/items", formData)
            .then(res => { console.log(res); })
            .catch(error => {
                console.log(error.response.data.message);
                setErrHandler(error.response.data.message)
            });




    }



    return (

        <div className="wraper">

            <div className="content" style={{ marginTop: '4em', marginBottom: '4em' }}>

                <label className="form-label" for="firstclassName">item name</label>
                <input className="auction-input" onChange={(e) => getFormData(e)} type="text" name="name" id="" />

                <label className="form-label" for="firstclassName">auctio id</label>
                <input className="auction-input" onChange={(e) => getFormData(e)} type="text" name="auctionID" id="" />

                <label className="form-label" for="firstclassName">description</label>
                <textarea onChange={(e) => getFormData(e)} type="text" name="description" style={{marginBottom:'1em'}} id="" rows="4" cols="50">

                </textarea>

                <label className="form-label" for="firstclassName">category</label>

                <select onChange={(e) => getFormData(e)} name="category" id="condition">
                    <option value="">choose</option>
                    <option value="antique">antique</option>
                    <option value="car">car</option>
                </select>

                {/* <input onChange={(e) => getFormData(e)} type="text" name="category" id="" /> */}


                <label for="condition">Condition</label>
                <select onChange={(e) => getFormData(e)} name="condition" id="condition">
                    <option value="">choose</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select>
                {/* <input onChange={(e) => getFormData(e)} type="text" name="condition" id="" /> */}

                <label className="label1" for="file">upload images</label>
                
                <input type="file" name="auctionImage" id="file" className="auction-input" onChange={(e) => imgFormData(e)} multiple />
                <Status />

                

                <div style={{color: 'red'}}> {errHandler}</div>



                <button className="auction-button" onClick={createauc}>upload</button>


            </div>

        </div >









    );
}

export default CreateAuction;