import React from 'react';
import HatCard from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CategoryList({ hat }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container"> 
      <Slider {...settings} style={{ maxWidth: '90%', margin: '0 auto' }}> 
        {hat.map((item) => (
          <div key={item.HatID}>
            <HatCard hat={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
