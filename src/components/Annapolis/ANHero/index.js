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

export default function GBHero() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    // const scrollToSection = (sectionId) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     sectionElement.scrollIntoView({ behavior: 'smooth' });
    // };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const yOffset = -60;
        const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
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

                        <a href="https://www.google.com/search?q=Isaula%27s+Beauty+Salon+Annapolis&sca_esv=561360965&sxsrf=AB5stBgeY4JX0fOm029u7oqoTT_HY6lw_g%3A1693420561070&ei=EYzvZI7dA6WyqtsP8OKCwAY&ved=0ahUKEwjOqf2Xg4WBAxUlmWoFHXCxAGgQ4dUDCA8&uact=5&oq=Isaula%27s+Beauty+Salon+Annapolis&gs_lp=Egxnd3Mtd2l6LXNlcnAiH0lzYXVsYSdzIEJlYXV0eSBTYWxvbiBBbm5hcG9saXMyCBAAGBYYHhgKSKx2UIkRWI45cAN4AJABApgBmgmgAaY3qgEPMC4xLjQuMi4zLjAuMy4xuAEDyAEA-AEBwgIIEAAYogQYsAPCAgcQIxiKBRgnwgILEC4YgAQYxwEYrwHCAhAQLhiABBgUGIcCGMcBGK8BwgIFEAAYgATCAgQQABgewgIGEAAYBRgewgIGEAAYFhgewgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAggQABiKBRiGA-IDBBgBIEGIBgGQBgK6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x89b7f6ce8f43a87b:0xaad16cac0c7efdef,1,,,," target='_blank' rel='noopener noreferrer'>
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
                                        {/* <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' /> */}
                                        <p className='footer-icon-description'>
                                            {/* <div className='map-span'> */}
                                            <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' />
                                            {/* </div> */}

                                            2128 Forest Dr, Annapolis, MD 21401
                                        </p>
                                    </div>
                                </a>

                                <a href='tel:+14107606422'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (410) 266-8950
                                        </p>
                                    </div>
                                </a>

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
