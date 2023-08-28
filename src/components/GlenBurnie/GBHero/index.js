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
    return (
        <header className='header-container'>
            <div className='hero-section'>
                <div className='hero-information'>
                    <h1 className='title'>Isaula's Beauty Salon</h1>
                    <h2 className='location'>Glen Burnie</h2>
                    <h3 className='description urbanist'>Experience the beauty and elegance of our salon.</h3>

                    {/* Isaula's Beauty Salon is located in the heart of Glen Burnie. */}
                    <h3 className='description urbanist'>Our salon offers a wide range of beauty services, including haircuts, styling, coloring, and more. Our team of experienced stylists is dedicated to providing you with the best possible experience.</h3>

                    <h3 className='description urbanist'>Monday - Saturday: 8:00am to 8:00pm
                        Sunday: 9:00am to 4:00pm
                    </h3>

                    {/*Walk-ins are welcome, but appointments are preferred. We look forward to seeing you soon!*/}

                    <div className='hero-buttons-container'>
                        <button className='view-services-hero'>
                            View Services
                        </button>

                        <button className='view-reviews-hero'>
                            View Reviews
                        </button>
                    </div>
                </div>

                <div className='hero-image-and-contact'>
                    <div className='hero-image-container'>
                        <img src={fili} className='hero-image' alt="Isaula's Salon" />
                        <div className="gradient-overlay">
                            <div className='contact-container urbanist'>
                                <div className='contact-heading-container'>
                                    <h3 className='contact-heading-text playfair'>Contact Us</h3>
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

                    {/* <div className='contact-container urbanist'>
                        <div className='contact-heading-container'>
                            <h3 className='contact-heading-text playfair'>Contact Us</h3>
                        </div>

                        <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon+LLC/@39.1592102,-76.6207809,15z/data=!4m6!3m5!1s0x89b7fcdd79a6aeed:0xa55be85257c1581f!8m2!3d39.1592102!4d-76.6207809!16s%2Fg%2F1v8l0hr7?entry=ttu">
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
                    </div> */}
                </div>
            </div>
        </header>
    )
}