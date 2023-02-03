import React from 'react'






let one = require("../asseets/one.png");
    let two = require("../asseets/two.png");
    let three = require("../asseets/three.png");
    let four = require("../asseets/four.png");
    let five = require("../asseets/five.png");



    const items = [
        {
            image:one,
            text:"Soft Drinks"
        },
        {
            image:two,
            text:"Pick-up"
        },
        {
            image:three,
            text:"Bakery Items"
        },
        {
            image:four,
            text:"Deals"
        },
        {
            image:five,
            text:"Fast Food"
        },
    ]






function Categories() {
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"5px",
        padding:"15px",backgroundColor:"#fff",marginBottom:"10px"}}>
        {items.map((item, index)=> (
            <div key={index} style={{alignItems:"center",
                marginRight:"150px"}}>
                <img src={items[index].image} alt="" style={{width:"50px",
                    height:"50px",resizeMpde:"contain"}} />
                <h5 style={{fontFamily:"Lexend",lineHeight:"20px",
                    fontSize:"16px",fontWeight:"400",letterSpacing:"0.05em",
                    textAlign:"center"}}>{items[index].text}</h5>
            </div>
        ))}
    </div>
  )
}

export default Categories
