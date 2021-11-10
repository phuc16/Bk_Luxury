
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../asset/css/home.css';

const photo =[
  {
    name: 'photo 1',
    url: ' https://www.icsaigon.com/sites/icsaigon/files/styles/home_slider/public/2021-05/ICSaigon_Frontpage_01.jpg?itok=r-XW1oRx'
  },
  {
    name: 'photo 2',
    url: 'https://www.icsaigon.com/sites/icsaigon/files/styles/home_slider/public/2021-03/InterContinental-Saigon-Hotel-Lobby%20_0.jpg?h=73a3395a&itok=iNwh9Bic'
  },
  {
    name: 'photo 3',
    url: 'https://www.icsaigon.com/sites/icsaigon/files/styles/home_slider/public/2021-06/ICSaigon_Frontpage_03_0.jpg?itok=ZQy9yxoT'
  }
]


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div >
        <Slider {...settings}>
        
        {photo.map((photo) => {
          return(
            <div className="slide-container" >
              <p><span>-</span> Welcome <span>-</span></p>
              <Typography className="brand">BK Luxury Hotel</Typography>
              <Button className="dis-btn" style={{backgroundColor: "#ECD4BB"}} variant="text">Discover Now</Button>
             
              <img height="100%" src={photo.url} className="img-slider"></img>
            </div>
          )
        } )}
          
        </Slider>
      </div>
    );
  }
}