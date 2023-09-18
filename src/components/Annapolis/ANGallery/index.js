import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import ImageModal from '../../Shared/ImageModal';
import OpenModalButton from '../../OpenModal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import behind_lines from '../../../assets/images/GBCuts/behind-lines.png';
import blade from '../../../assets/images/GBCuts/blade.jpg';
import client_cut from '../../../assets/images/GBCuts/client-cut.png';
import fade_behind from '../../../assets/images/GBCuts/fade-behind.png';
import heart_design from '../../../assets/images/GBCuts/heart-design.png';
import kids_haircut from '../../../assets/images/GBCuts/kids-haircut.png';
import line_behind from '../../../assets/images/GBCuts/line-behind.jpg';
import side_lines from '../../../assets/images/GBCuts/side-lines.png';

export default function GBGallery() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

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

    const galleryImages = [
        { src: behind_lines, alt: 'Line design haircut' },
        { src: blade, alt: 'Stylist shaving a beard' },
        { src: client_cut, alt: "Barber cutting customer's hair" },
        { src: fade_behind, alt: 'Fade haircut from behind' },
        { src: heart_design, alt: 'Heart haircut design' },
        { src: kids_haircut, alt: "Kid's haircut" },
        { src: line_behind, alt: 'Line design from behind' },
        { src: side_lines, alt: 'Line design on the side' },
    ];

    return (
        <div className='gallery-section'>
            <div className='home-header-container'>
                <h1 className='home-header'>{content.homeHeader}</h1>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {galleryImages.map((image, i) => (
                        <div key={i} className='gallery-image-container'>
                            <OpenModalButton
                                modalComponent={<ImageModal src={image.src} alt={image.alt} />}
                                buttonText={<img src={image.src} alt={image.alt} className='gallery-image' />}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
