import React from 'react'
import "./Advantages.css"





let one = require("../asseets/one.png");
    let six = require("../asseets/six.png");
    let three = require("../asseets/three.png");
    let four = require("../asseets/four.png");
    let seven = require("../asseets/seven.png");






    const items = [
        {
            image:one,
            text:"WIFI",
            subtext:"Get the best wifi connectivity without any interference."
        },
        {
            image:six,
            text:"PICK-UP",
            subtext:"There has never been a sadness that can't be cured with breakfast foods."
        },
        {
            image:three,
            text:"AIR TICKETS",
            subtext:"There has never been a sadness that can't be cured with breakfast foods."
        },
        {
            image:four,
            text:"FREE PARKING",
            subtext:"There has never been a sadness that can't be cured with breakfast foods."
        },
        {
            image:seven,
            text:"BRAEKFAST",
            subtext:"There has never been a sadness that can't be cured with breakfast foods."
        },
    ]









function Advantages() {
  return (
    <>
        <div className="advantages">
            <div className="advantages_info">
                <div className="adv_header">
                    <h1>Advantages of Staying with Us</h1>
                    <h4>Sapuen gravida dolor commodo.</h4>
                </div>
                <div style={{justifyContent:"center",marginTop:"5"}}>
                    {items.map((item,index)=>(
                        <div key={index} style={{alignItems:"center",marginRight:"30",display:"flex",
                        marginLeft:"143px"}}>
                            <img src={items[index].image} alt="" className='adv_img' />
                            <div>
                            <h5 className='adv_h5'>
                                {items[index].text}
                            </h5>
                            <h5 className="adv_h">
                                {items[index].subtext}
                            </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Advantages
