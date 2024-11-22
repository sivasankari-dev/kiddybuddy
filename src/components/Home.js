import React from "react";

const jsonData = require("../data/homedata.json")

const Home = (props) => {

const data = (jsonData && jsonData.length > 0) && jsonData.map(function(item,index){
    return <div className="img-card">
        <img src = {item.image} alt = "Shape Stacker" ></img>
        <h2>{item.name}</h2>
        <h4>{item.price}</h4>
        <button className="btn" >Add to Cart</button>
    </div>;
}) 

return (
    <div>
        <h1>Kiddybuddy</h1>
        <div className="card">
        {data}
        </div>
    </div>
);
}

export default Home;
