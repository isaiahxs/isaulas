import React, { useState } from 'react';
import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import salon_picture from '../../../assets/images/wide-shot-empty.jpg';
import fili from '../../../assets/images/GBCuts/fili.jpg';
import { Link } from 'react-router-dom';
import map_pin from '../../../assets/icons/map-pin.svg';
import phone from '../../../assets/icons/phone-icon.svg';
import facebook from '../../../assets/icons/facebook-logo.svg';
import instagram from '../../../assets/icons/instagram-logo.svg';
import './GBHero.css';

export default function GBHero() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='header-container'>
            <div className='hero-section'>
                <div className='hero-information'>
                    {/* <button className='language-toggle-button' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button> */}
                    <h1 className='title'>{content.title}</h1>
                    <h2 className='location'>{content.location}</h2>
                    <button className='language-toggle-button' onClick={toggleLanguage}>
                        {currentLanguage === 'english' ? 'Español' : 'English'}
                    </button>
                    {/* <h3 className='description urbanist'>Experience the beauty and elegance of our salon.</h3> */}

                    <div className='hero-descriptions-container'>
                        <h3 className='description urbanist'>
                            {content.description}
                        </h3>

                        <h3 className='description description-2 urbanist'>
                            {content.description2}
                        </h3>

                        <h3 className='description description-hours urbanist'>
                            {content.hours}
                        </h3>

                        <h3 className='description description-hours description-hours-bottom urbanist'>
                            {content.hoursSunday}
                        </h3>
                    </div>

                    {/*Walk-ins are welcome, but appointments are preferred. We look forward to seeing you soon!*/}

                    <div className='hero-buttons-container'>
                        <button className='view-services-hero' onClick={() => scrollToSection('services')}>
                            {content.viewServices}
                        </button>

                        <button className='view-reviews-hero' onClick={() => scrollToSection('reviews')}>
                            {content.viewReviews}
                        </button>

                        <a href="https://www.google.com/search?q=Isaula%27s+Beauty+Salon+LLC&sca_esv=560578390&ei=IBrsZPm8Ja-u5NoPyOmv-Aw&ved=0ahUKEwj5zLCNuv6AAxUvF1kFHcj0C88Q4dUDCBA&uact=5&oq=Isaula%27s+Beauty+Salon+LLC&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUlzYXVsYSdzIEJlYXV0eSBTYWxvbiBMTEMyCxAuGIAEGMcBGK8BMgIQJjIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGAzIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI32FQpgxYuV9wAngAkAEAmAFMoAHaBqoBAjEzuAEDyAEA-AEBwgIOEC4YgAQYxwEYrwEYsAPCAgsQABiKBRiGAxiwA8ICBRAAGKIEwgIKECEYoAEYwwQYCsICDRAuGA0YgAQYxwEYrwHCAhwQLhgNGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIIEAAYFhgeGAriAwQYASBBiAYBkAYDugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x89b7fcdd79a6aeed:0xa55be85257c1581f,3,,,," target='_blank' rel='noopener noreferrer'>
                            <button className='leave-review-hero'>{content.leaveReview}
                            </button>
                        </a>
                    </div>
                </div>

                <div className='hero-image-and-contact'>
                    <div className='hero-image-container'>
                        <img src={fili} className='hero-image' alt="Isaula's Salon" />
                        <div className="gradient-overlay">
                            <div className='contact-container urbanist'>
                                <div className='contact-heading-container'>
                                    <h3 className='contact-heading-text playfair'>{content.contactHeading}</h3>
                                </div>

                                <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon+LLC/@39.1592102,-76.6207809,15z/data=!4m6!3m5!1s0x89b7fcdd79a6aeed:0xa55be85257c1581f!8m2!3d39.1592102!4d-76.6207809!16s%2Fg%2F1v8l0hr7?entry=ttu"
                                    target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={map_pin} className='footer-icon' alt='Map Pin Icon' />
                                        <p className='footer-icon-description'>7574 Ritchie Hwy, Glen Burnie, MD 21061</p>
                                    </div>
                                </a>

                                <div className='footer-icon-container'>
                                    <img src={phone} className='footer-icon' alt='Phone Icon' />
                                    <p className='footer-icon-description'>
                                        <a href='tel:+14107606422'>(410) 760-6422</a>
                                    </p>
                                </div>

                                <a href="https://www.facebook.com/IsaulasBeautySalonII" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Facebook</p>
                                    </div>
                                </a>

                                <a href='https://www.instagram.com/isaulasbs/' target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={instagram} className='footer-icon' alt='Instagram Logo' />
                                        <p className='footer-icon-description'>Instagram</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
