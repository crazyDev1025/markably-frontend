import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Footer() {
  const brands = [
    './imgs/brand-1.png',
    './imgs/brand-2.png',
    './imgs/brand-3.png',
    './imgs/brand-4.png',
    './imgs/brand-5.png',
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <footer>
      <div id='footer' className="bg-[#0f3460] py-[80px]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="w-full">
            <Slider {...settings}>
              {brands.map((brand, index) => (
                <div key={index} className="px-2">
                  <img 
                    src={brand} 
                    alt={`Brand ${index + 1}`} 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="py-[20px] bg-[#1d293e]">
        <div className="px-[15px]">
          <div className="text-white text-[16px] text-center">© 2024 Interactive Learning Solutions</div>
          <div className="mt-[5px] flex justify-center">
            <a href="#" className="text-[#337ab7] text-[18px]">Privacy Policy</a>
            <p className="mx-[8px] text-[18px] text-gray-500">|</p>
            <a href="#" className="text-[#337ab7] text-[18px]">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;