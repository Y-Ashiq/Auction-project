import { useState } from "react";
import axios from 'axios'
import "./craete_auction.css"


const CreateAuction = () => {


    // const [name, setname] = useState("");
    // const [auctionID, setauctionID] = useState("");
    // const [description, setdescription] = useState("");
    // const [category, setcategory] = useState("");
    // const [condition, setcondition] = useState("");

    const [auctionImage1, setauctionImage1] = useState("");

    const [item, setItem] = useState({
        name: "",
        auctionID: "",
        description: "",
        category: "",
        condition: ""
    })


    const getFormData = (e) => {
        const data = { ...item };
        data[e.target.name] = e.target.value;
        setItem(data);
        console.log(data);
    }




     const createauc = async () => {


        const formData = new FormData();

        formData.append('auctionID', item.auctionID);
        formData.append('name', item.name);
        formData.append('description', item.description);
        formData.append('auctionImage1', auctionImage1);
        formData.append('condition', item.condition);
        formData.append('category', item.category);

        await axios.post("http://159.223.172.150/api/item-service/items", formData)
            .then(res => { console.log(res); })
            .catch(error => {
                console.log(error);
            });




    }



    return (

        <div className="wraper">

            <div className="content" style={{ marginTop: '4em', marginBottom:'4em' }}>

                <label className="form-label" for="firstclassName">item name</label>
                <input onChange={(e) => getFormData(e)} type="text" name="name" id="" />

                <label className="form-label" for="firstclassName">auctio id</label>
                <input onChange={(e) => getFormData(e)} type="text" name="auctionID" id="" />

                <label className="form-label" for="firstclassName">description</label>
                <input onChange={(e) => getFormData(e)} type="text" name="description" id="" />

                <label className="form-label" for="firstclassName">category</label>

                <select onChange={(e) => getFormData(e)} name="category" id="condition">
                    <option value="">chooce</option>
                    <option value="antique">antique</option>
                    <option value="car">car</option>
                </select>

                {/* <input onChange={(e) => getFormData(e)} type="text" name="category" id="" /> */}


                <label for="condition">Condition</label>
                <select onChange={(e) => getFormData(e)} name="condition" id="condition">
                    <option value="">chooce</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select>
                {/* <input onChange={(e) => getFormData(e)} type="text" name="condition" id="" /> */}

                <label className="form-label" for="firstclassName">image</label>
                <input onChange={(e) => setauctionImage1(e.target.files[0])} type="file" name="auctionImage1" id="" />

                <button className="bttn" onClick={createauc}>submit</button>


            </div>

        </div>









    );
}

export default CreateAuction;