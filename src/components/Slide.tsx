import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider-image" >
                    <img src="img/iu_1.jpeg" ></img>
                </div>
                <div className="slider-image">
                    <img src="img/iu_2.jpeg" ></img>
                </div>
                <div className="slider-image">
                    <img src="img/iu_3.jpeg" ></img>
                </div >
                <div className="slider-image">
                    <img src="img/iu_4.jpeg" ></img>
                </div>
                <div className="slider-image">
                    <img src="img/iu_5.jpeg" ></img>
                </div>
                <div className="slider-image">
                    <img src="img/iu_6.jpeg" ></img>
                </div>
            </Slider>
        </div >
    )
}

export default Slide
