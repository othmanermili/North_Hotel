import React, { useState } from 'react'
import Button from '@material-ui/core/Button/Button.js'
import "./Banner.css"
import {format} from "date-fns"
import {DateRange} from "react-date-range"
import {useNavigate} from "react-router-dom"


let vector = require("../asseets/vector.png");
let adult = require("../asseets/adult.png");
let child = require("../asseets/child.png");



function Banner() {

    const navigate = useNavigate();


    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);


    const [options,setOptions] = useState({
        adult: 1,
        children: 0,
    });


    const [showSearch,setShowSearch] = useState(false);

    const handleOption = (name, operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation ==="i" ? options[name] + 1 : options[name] - 1 ,
            }
        })
    }



    const handle = () =>{
        navigate("/search");
    }



  return (
    <>
        <div className="banner">
            <div className="banner_search">
                {
                    showSearch && <DateRange 
                    editableDateInputs={true}
                    onChange={(item)=> setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                    />
                }
                
            </div>
            <div className="banner_info">
                <h4>
                    Enjoy Your Vacation With BOOKING.COM
                </h4>
                <h1 style={{marginTop:"0px",color:"#EB8A04"}}>
                    Lets us plan you a perfect Holiday
                </h1>
                <Button onClick={handle}>Explore Now</Button>
            </div>
        </div>
        <div className="booking_div">
            <div className="booking">
                <div style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
                    <div className="banner_main_div">
                        <div className="booking_header">
                            <img className="booking_vector" src={vector} alt="" />
                            <h4>Arrival Date</h4>
                            <img className="booking_vector2" src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                             alt="" onClick={()=> setShowSearch(true)}/>
                        </div>
                        <div className="booking_bof">
                            <h2>{`${format(date[0].startDate,"dd MMM")}`}</h2>
                            <h4>{`${format(date[0].startDate,"EEEE")}`}</h4>
                        </div>
                    </div>


                    <div className="banner_main_div">
                        <div className="booking_header">
                            <img className="booking_vector" src={vector} alt="" />
                            <h4>Check Out</h4>
                            <img className="booking_vector2" src="https://img.icons8.com/ios-filled/24/000000/sort-down.png"
                             alt="" onClick={()=> setShowSearch(false)}/>
                        </div>
                        <div className="booking_bof">
                            <h2>{`${format(date[0].endDate,"dd MMM")}`}</h2>
                            <h4>{`${format(date[0].endDate,"EEEE")}`}</h4>
                        </div>
                    </div>


                    <div className="banner_main_div">
                        <div className="booking_header">
                            <img className="booking_vector" src={adult} alt="" />
                            <h4>Adults</h4>
                        </div>
                        <div className="booking_bo">
                            <h2>{`${options.adult}`}</h2>
                            <div className="booking_noooo">
                                <div onClick={()=> handleOption("adult","i")}>
                                    <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" alt="" style={{height:"28px"}}/>  
                                </div>
                                <div>
                                    <button style={{border:"none",background:"transparent"}}
                                        disabled={options.adult <= 1} onClick={()=> handleOption("adult","d")}
                                    >
                                        <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" style={{height:"24px"}}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="banner_main_div">
                        <div className="booking_header">
                            <img className="booking_vector" src={child} alt="" />
                            <h4>Children</h4>
                        </div>
                        <div className="booking_bo">
                            <h2>{`${options.children}`}</h2>
                            <div className="booking_noooo">
                                <div onClick={()=> handleOption("children","i")}>
                                    <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" alt="" style={{height:"28px"}}/>  
                                </div>
                                <div>
                                    <button style={{border:"none",background:"transparent"}}
                                        disabled={options.children <= 0} onClick={()=> handleOption("children","d")}
                                    >
                                        <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" style={{height:"24px"}}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_main_div" style={{paddingTop:"0px"}}>
                        <h4 className="fadded_text">
                            Hope You Have A Nice Experiance ...
                        </h4>
                        <div className="booking_button">
                            <button onClick={handle}>Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
