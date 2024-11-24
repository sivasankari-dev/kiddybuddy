import React from "react";

//const bannerData = require("../data/bannerdata.json")
const jsonData = require("../data/carddata.json")

const Home = (props) => {

    // const banner = (bannerData && bannerData.length > 0) && bannerData.map(function(item,index){
    //     return <div className="banner-card">
    //         <img src = {item.image} alt = "Shape Stacker" ></img>
    //         <h3>{item.name}</h3>
    //         </div>;
    // })

const data = (jsonData && jsonData.length > 0) && jsonData.map(function(item,index){
    return <div className="img-card">
        <img src = {item.image} alt = "Shape Stacker" ></img>
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
        <button className="btn" >Add to Cart</button>
    </div>;
}) 

return (
    <div>
       <div className="card">
        {data}
        </div>
    </div>
);
}

export default Home;
