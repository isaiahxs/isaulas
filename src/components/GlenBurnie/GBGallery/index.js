import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import behind_lines from '../../../assets/images/GBCuts/behind-lines.png';
import blade from '../../../assets/images/GBCuts/blade.jpg';
import blue_dye from '../../../assets/images/GBCuts/blue-dye.jpg';
import client_cut from '../../../assets/images/GBCuts/client-cut.png';
import curls from '../../../assets/images/GBCuts/curls.jpg';
import fade_behind from '../../../assets/images/GBCuts/fade-behind.png';
// import fili from '../../../assets/images/GBCuts/fili.jpg';
import heart_design from '../../../assets/images/GBCuts/heart-design.png';
import highlight_curls from '../../../assets/images/GBCuts/highlight-curls.jpg';
import kids_haircut from '../../../assets/images/GBCuts/kids-haircut.png';
import line_behind from '../../../assets/images/GBCuts/line-behind.jpg';
import makeup from '../../../assets/images/GBCuts/makeup.png';
import red_dye from '../../../assets/images/GBCuts/red-dye.jpg';
import side_lines from '../../../assets/images/GBCuts/side-lines.png';
import womans_style from '../../../assets/images/GBCuts/womans-style.png';
import './GBGallery.css';

export default function GBGallery() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='gallery-section'>
            <div className='home-header-container'>
                <h1 className='home-header'>Featured Gallery</h1>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {/* <div> */}
                    <img src={behind_lines} alt='Line design haircut' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={blade} alt='Stylist shaving a beard' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={blue_dye} alt='Blue hair dye haircut' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={client_cut} alt="Barber cutting customer's hair" className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={curls} alt="Stylist curling customer's hair" className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={fade_behind} alt='Fade haircut from behind' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={heart_design} alt='Heart haircut design' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={highlight_curls} alt='Curled and dyed hair' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={kids_haircut} alt="Kid's haircut" className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={line_behind} alt='Line design from behind' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={makeup} alt='Customer with makeup applied and hair curled' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={red_dye} alt='Red dyed haircut' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={side_lines} alt='Line design on the side' className='gallery-image' />
                    {/* </div> */}
                    {/* <div> */}
                    <img src={womans_style} alt="Curled and dyed woman's hair" className='gallery-image' />
                    {/* </div> */}
                </Slider>
            </div>
        </div>
    );
}


{/* <div className='gallery-outer-container'>
    <div className='gallery-inner-container' ref={galleryRef}>
        <img src={behind_lines} alt='Line design haircut' className='gallery-image' />
        <img src={blade} alt='Stylist shaving a beard' className='gallery-image' />
        <img src={blue_dye} alt='Blue hair dye haircut' className='gallery-image' />
        <img src={client_cut} alt="Barber cutting customer's hair" className='gallery-image' />
        <img src={curls} alt="Stylist curling customer's hair" className='gallery-image' />
        <img src={fade_behind} alt='Fade haircut from behind' className='gallery-image' />
        <img src={heart_design} alt='Heart haircut design' className='gallery-image' />
        <img src={highlight_curls} alt='Curled and dyed hair' className='gallery-image' />
        <img src={kids_haircut} alt="Kid's haircut" className='gallery-image' />
        <img src={line_behind} alt='Line design from behind' className='gallery-image' />
        <img src={makeup} alt='Customer with makeup applied and hair curled' className='gallery-image' />
        <img src={red_dye} alt='Red dyed haircut' className='gallery-image' />
        <img src={side_lines} alt='Line design on the side' className='gallery-image' />
        <img src={womans_style} alt="Curled and dyed woman's hair" className='gallery-image' />
    </div>
</div> */}