import React, { useEffect } from 'react';
import Slider from 'react-slick';
import '../SliderComponent.css';
import PersonalizeButton from './PersonalizeButton';
const SliderComponent = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: false,
    draggable: true,
    focusOnSelect: true,
    beforeChange: () => {
      document.querySelector('.slick-list').classList.add('do-transition');
    },
    afterChange: () => {
      document.querySelector('.slick-list').classList.remove('do-transition');
    },
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>
  };

  return (

    <div className="slider-body">
      <div className="slider">
        <div style={{ marginBottom: '15px' }}></div>
        <div className="row text-center">
          <p style={{ fontFamily: 'sans-serif', fontSize: '16px', fontWeight: 'lighter', color: 'white', marginTop: '12px',marginBottom:'20px' }}>OUR Stores</p>
        </div>
        <Slider {...settings}>
          <div className="slider-item">
            <img src="\images\rolex1.jpg" alt="Slider 1" />
            <div class="text-center align-items-center justify-content-center" data-element="content" style={{marginTop:'10px'}}>
              <h3>
                <span className="image-text" style={{ color: "white",fontFamily:'sans-serif',fontSize:'14px',fontWeight:'lighter' }}>Maison Goyard Paris 233</span>
              </h3>
              <p>
                <span style={{ color: "#ccc",fontFamily:'sans-serif',fontWeight:'lighter',fontSize:'11px' }}>233 Rue Saint-Honor&eacute;, 75001 Paris</span>
              </p>
            </div>
          </div>
          <div className="slider-item">
            <img src="\images\rolex2.jpg" alt="Slider 2" />
            <div class="text-center align-items-center justify-content-center" data-element="content" style={{marginTop:'10px'}}>
              <h3>
                <span className="image-text" style={{ color: "white",fontFamily:'sans-serif',fontSize:'14px',fontWeight:'lighter' }}>Maison Goyard Paris 233</span>
              </h3>
              <p>
                <span style={{ color: "#ccc",fontFamily:'sans-serif',fontWeight:'lighter',fontSize:'11px' }}>233 Rue Saint-Honor&eacute;, 75001 Paris</span>
              </p>
            </div>
          </div>
          <div className="slider-item">
            <img src="\images\rolex3.jpg" alt="Slider 3" />
            <div class="text-center align-items-center justify-content-center" data-element="content" style={{marginTop:'10px'}}>
              <h3>
                <span className="image-text" style={{ color: "white",fontFamily:'sans-serif',fontSize:'14px',fontWeight:'lighter' }}>Maison Goyard Paris 233</span>
              </h3>
              <p>
                <span style={{ color: "#ccc",fontFamily:'sans-serif',fontWeight:'lighter',fontSize:'11px' }}>233 Rue Saint-Honor&eacute;, 75001 Paris</span>
              </p>
            </div>
          </div>
          <div className="slider-item">
            <img src="\images\rolex1.jpg" alt="Slider 4" />
            <div class="text-center align-items-center justify-content-center" data-element="content" style={{marginTop:'10px'}}>
              <h3>
                <span className="image-text" style={{ color: "white",fontFamily:'sans-serif',fontSize:'14px',fontWeight:'lighter' }}>Maison Goyard Paris 233</span>
              </h3>
              <p>
                <span style={{ color: "#ccc",fontFamily:'sans-serif',fontWeight:'lighter',fontSize:'11px' }}>233 Rue Saint-Honor&eacute;, 75001 Paris</span>
              </p>
            </div>
          </div>
          <div className="slider-item">
            <img src="\images\rolex5.jpg" alt="Slider 5" />
            <div class="text-center align-items-center justify-content-center" data-element="content" style={{marginTop:'10px'}}>
              <h3>
                <span className="image-text" style={{ color: "white",fontFamily:'sans-serif',fontSize:'14px',fontWeight:'lighter' }}>Maison Goyard Paris 233</span>
              </h3>
              <p>
                <span style={{ color: "#ccc",fontFamily:'sans-serif',fontWeight:'lighter',fontSize:'11px' }}>233 Rue Saint-Honor&eacute;, 75001 Paris</span>
              </p>
            </div>
          </div>
        </Slider>
        <div className="row text-center " style={{marginBottom:'20px'}}>
          <PersonalizeButton dataElement="ALL OUR BOUTIQUES" colore="white" url="www.google.com"></PersonalizeButton>
        </div>

      </div>
    </div>
  );
}

export default SliderComponent;