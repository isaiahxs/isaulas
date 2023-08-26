import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import salon_picture from '../../../assets/images/wide-shot-empty.jpg';
import { Link } from 'react-router-dom';
import map_pin from '../../../assets/icons/map-pin.svg';
import phone from '../../../assets/icons/phone-icon.svg';
import facebook from '../../../assets/icons/facebook-logo.svg';
import instagram from '../../../assets/icons/instagram-logo.svg';
import './GBHomePage.css';

export default function GBHomePage() {
    return (
        <div>
            <Navigation />
            <header className='header-container'>
                <div className='hero-section'>
                    <div className='hero-information'>
                        <h1 className='title'>Isaula's Beauty Salon</h1>
                        <h2 className='location'>Glen Burnie</h2>
                        <h3 className='description urbanist'>Experience the beauty and elegance of our salon.</h3>

                        <h3 className='description urbanist'>Isaula's Beauty Salon is located in the heart of Glen Burnie. Our salon offers a wide range of beauty services, including haircuts, styling, coloring, and more. Our team of experienced stylists is dedicated to providing you with the best possible experience.</h3>

                        <button className='view-services-hero'>
                            View Services
                        </button>

                        <button className='view-reviews-hero'>
                            View Reviews
                        </button>
                    </div>
                    <div className='hero-image-container'>
                        <img src={salon_picture} className='hero-image' alt="Isaula's Salon" />
                    </div>
                </div>
            </header>
            <Footer />
        </div>
    )
}