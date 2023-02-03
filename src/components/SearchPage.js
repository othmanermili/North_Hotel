import React, { useState } from 'react'
import "./SearchPage.css"
import Button from '@material-ui/core/Button/Button.js'
import SearchResult from './SearchResult';
import image from '../asseets/hotel-bg-2.png'


let p1 = require("../asseets/p1.jpg");
let p2 = require("../asseets/p2.jpg");


const rooms = [
    {
        img:p1,
        location:"Tanger",
        title:"two rooms hotel HILTON",
        description:"nice place",
        star:"5",
        price:"50",
        total:"450"
    },
    {
        img:p2,
        location:"Tanger",
        title:"two rooms hotel CONTINENTAL",
        description:"nice place",
        star:"5",
        price:"30",
        total:"230"
    }
];



function SearchPage() {

    const [userData,setUserData] = useState([])

  return (
    <div className="searchpage">
        <img src={image} alt="" className='img-bg-search'/>
        <div className="searchpage_data">
            <Button variend="outlined">
                USER NAME
            </Button>
            <Button variend="outlined">
                USER EMAIL
            </Button>
        </div>
        {rooms.map((data,index)=>(
            <SearchResult 
                key={index}
                img={data.img}
                price={data.price}
                location={data.location}
                title={data.title}
                description={data.description}
                star={data.star}
                total={data.total}
            />
        ))}
    </div>
  )
}

export default SearchPage
