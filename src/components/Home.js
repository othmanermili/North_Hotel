import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Categories from "./Categories"
import Card from './Card'
import Advantages from './Advantages'
import Footer from './Footer'




let p1 = require("../asseets/p1.jpg");
let p2 = require("../asseets/p2.jpg");
let p3 = require("../asseets/p3.jpg");
let p4 = require("../asseets/p4.png");





function Home() {
  return (
    <div className='home'>
        <Banner/>

        <div className="home_categories">
          <div style={{display:"flex",alignItems:"flex-end",
              justifyContent:"center",flexDirection:"column",
              marginTop:"180px",marginBottom:"90px",height:"15vh"}}>
              <div style={{background:"#EB8A04",height:"170px",
                  width:"50%",zIndex:"-1",position:"absolute"}}>

              </div>
              <div style={{display:"flex",alignItems:"center",
                  flexDirection:"column",justifyContent:"center",
                  background:"transparent",zIndex:"1",marginRight:"640px"}}>
                <h1 style={{color:"blue",marginBottom:"0px"}} className='quote_h1'>
                  Full service, at your disposal
                </h1>
                <h4 style={{display:"flex",alignItems:"center",
                justifyContent:"center",color:"gray",marginTop:"0px"}}
                className='quote_h4'>
                  More than you can Imagine
                </h4>
              </div>
          </div>
          <Categories />
          <div style={{display:"",alignItems:"center",
              justifyContent:"center",flexDirection:"column",
              marginTop:"60px",marginBottom:"120px",height:"15vh"}}>
              <div style={{background:"#EB8A04",height:"170px",
                  width:"50%",zIndex:"-1",position:"absolute"}}>

              </div>
              <div style={{display:"flex",alignItems:"flex-end",
                  flexDirection:"column",justifyContent:"center",
                  background:"transparent",zIndex:"1",marginRight:"640px"}}>
                <h1 style={{color:"blue",marginBottom:"0px"}} className='quote_h1'>
                  Choose What's Best for You
                </h1>
                <h4 style={{display:"flex",alignItems:"center",
                justifyContent:"center",color:"gray",marginTop:"0px"}}
                className='quote_h4'>
                  Make your vacation Comfortable.
                </h4>
              </div>
          </div>
        </div>
        <div className="home_section">
          <Card   src={p1}  title={"Hilton Tanger City Center Hotel & ResidencesUne nouvelle fenêtre va s'ouvrir"}
            description={"Featuring a bar, terrace and views of the city, Hilton Tanger City Center Hotel & Residences is located in Tangier in the Tangier-Tetouan-Al Hoceima Region."}
          />
          <Card   src={p2}  title={"Hotel Continental"}
            description={"Offrant une vue panoramique sur la baie de Tanger, l'Hotel Continental vous accueille à 5 minutes du port, au cœur de la médina."}
          />
          <Card   src={p3}  title={"Mövenpick Hotel And Casino Malabata Tanger"}
            description={"The imposing Mövenpick Hotel & Casino Malabata Tanger is the perfect place for business or leisure. It is set amongst beautiful gardens with a huge free-form swimming pool. Located on the shores of the Mediterranean, this hotel overlooks the beautiful bay of Tangier. Located just 5-10 minutes drive from the city center and yet far enough away to provide a quiet and relaxing environment. Large rooms, meeting rooms, casino, restaurants, bars, and gym."}
          />
          <Card   src={p4}  title={"Hotel ANDALUCIA"}
            description={"This hotel boasts a prime setting in Tangier. It is located within easy access of the harbour and the airport. Guests will find themselves in close proximity to the many cultural and historical attractions that the area has to offer. The hotel is situated within easy access of a wide range of shopping, dining and entertainment opportunities. This hotel boasts stunning views over the Royal Golf of Tanger. The hotel greets visitors with warm, traditional hospitality, inviting them into the splendid surroundings of the lobby. The guest rooms are sumptuously designed, featuring contemporary and traditional elements. Excellent facilities ensure that guests' needs are fully attended to."}
          />
        </div>
        <div>
          <h1 className="quotes_card_">
            RCG Hotels stand as a true paragon of world class hospitality and 
            have some of the best luxury hotels and resorts in morocco,Book 
            handpicked hotels with certified quality . 
          </h1>
        </div>
        <div style={{display:"flex",alignItems:"flex-end",
              justifyContent:"center",flexDirection:"column",
              marginTop:"120px",marginBottom:"120px",height:"15vh"}}>
              <div style={{background:"#EB8A04",height:"170px",
                  width:"50%",zIndex:"-1",position:"absolute"}}>

              </div>
              <div style={{display:"flex",alignItems:"center",
                  flexDirection:"column",justifyContent:"center",
                  background:"transparent",zIndex:"1",marginRight:"760px"}}>
                <h1 style={{color:"blue",marginBottom:"0px"}} className='quote_h1'>
                  Luxury Redefined
                </h1>
                <h4 style={{display:"flex",alignItems:"center",
                justifyContent:"center",color:"gray",marginTop:"0px"}}
                className='quote_h4'>
                  Luxury is Personal
                </h4>
              </div>
          </div>
          <div className="some_quotes">
            <h4>
              RCG Hotels stand as a true paragon of world class hospitality 
              and have some of the best luxury hotels and resorts in morocco.
               They are synonymous with exellence in hospitality and being 
               able to offer unforgettable holiday and stay experiences 
               to guests in the most exquisite settings. With "Stay with us , 
               Stay with nature" being the sustained outlook of this luxury 
               hotel chain , a stay at any of its properties truly brings 
               guests closer to a sense of wellbeing and oneness with nature. 
               RCG Hotels offers a safe and secure environment , authentic 
               hospitality , thoughtful service , lavish accommodation and 
               world class facilities .
            </h4>
          </div>
          <Advantages />
          <div style={{display:"",alignItems:"center",
              justifyContent:"center",flexDirection:"column",
              marginTop:"60px",marginBottom:"120px",height:"15vh"}}>
              <div style={{background:"#EB8A04",height:"170px",
                  width:"50%",zIndex:"-1",position:"absolute"}}>

              </div>
              <div style={{display:"flex",alignItems:"flex-end",
                  flexDirection:"column",justifyContent:"center",
                  background:"transparent",zIndex:"1",marginRight:"640px"}}>
                <h1 style={{color:"blue",marginBottom:"0px"}} className='quote_h1'>
                  They Loved Our Hospitality
                </h1>
                <h4 style={{display:"flex",alignItems:"center",
                justifyContent:"center",color:"gray",marginTop:"0px"}}
                className='quote_h4'>
                  Explore the world with Ease.
                </h4>
              </div>
          </div>
          <Footer />
    </div>
  )
}

export default Home
