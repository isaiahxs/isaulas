import { Link } from 'react-router-dom';
import map_pin from '../../../assets/icons/map-pin.svg';
import phone from '../../../assets/icons/phone-icon.svg';
// import email from '../../../assets/icons/mail-icon.svg';
import facebook from '../../../assets/icons/facebook-logo.svg';
import instagram from '../../../assets/icons/instagram-logo.svg';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-section'>
                <section className='logo-section'>
                    <Link to='/'>
                        <img className='big-logo' alt="Big Isaula's Logo" />
                    </Link>
                </section>

                <section className='first-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Navigation
                        </li>
                        <div className='footer-options'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/about'>About</a>
                            </li>
                        </div>
                    </ul>
                </section>

                <section className='second-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Glen Burnie
                        </li>
                        <div className='footer-options'>
                            <li>
                                <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon+LLC/@39.1592102,-76.6207809,15z/data=!4m6!3m5!1s0x89b7fcdd79a6aeed:0xa55be85257c1581f!8m2!3d39.1592102!4d-76.6207809!16s%2Fg%2F1v8l0hr7?entry=ttu">
                                    <div className='footer-icon-container'>
                                        <img src={map_pin} className='footer-icon' alt='Map Pin Icon' />
                                        <p className='footer-icon-description'>7574 Ritchie Hwy, Glen Burnie, MD 21061</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                {/* <a href='/work-in-progress'> */}
                                <div className='footer-icon-container'>
                                    <img src={phone} className='footer-icon' alt='Phone Icon' />
                                    <p className='footer-icon-description'>(410) 760-6422</p>
                                </div>
                                {/* </a> */}
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    {/* <img className='footer-icon' alt='Calendar Icon' /> */}
                                    <p className='footer-icon-description'>Mon - Sat: 8:00am - 8:00pm
                                        Sun: 8:00am - 3:00pm
                                    </p>
                                </div>
                            </li>
                        </div>
                    </ul>
                </section>

                <section className='third-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Annapolis
                        </li>
                        <div className='footer-options'>
                            <li>
                                <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon/@38.977884,-76.5386406,17z/data=!4m16!1m9!3m8!1s0x89b7f6ce8f43a87b:0xaad16cac0c7efdef!2sIsaula's+Beauty+Salon!8m2!3d38.977884!4d-76.5360657!9m1!1b1!16s%2Fg%2F1tdx9ljt!3m5!1s0x89b7f6ce8f43a87b:0xaad16cac0c7efdef!8m2!3d38.977884!4d-76.5360657!16s%2Fg%2F1tdx9ljt?entry=ttu" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={map_pin} className='footer-icon' alt='Map Pin Icon' />
                                        <p className='footer-icon-description'>2128 Forest Dr, Annapolis, MD 21401</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                {/* how can i make it so when someone clicks here on mobile, it gives the option to call */}
                                <div className='footer-icon-container'>
                                    <img src={phone} className='footer-icon' alt='Phone Icon' />
                                    <p className='footer-icon-description'>(410) 266-8950</p>
                                </div>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>Mon - Sat: 8:00am - 8:00pm
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>Sun: 8:00am - 3:00pm
                                    </p>
                                </div>
                            </li>
                        </div>
                    </ul>
                </section >

                <section className='fourth-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Social Media
                        </li>

                        <div className='footer-options'>
                            <li>
                                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Facebook</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={instagram} className='footer-icon' alt='Instagram Logo' />
                                        <p className='footer-icon-description'>Instagram</p>
                                    </div>
                                </a>
                            </li>
                        </div>
                    </ul>
                </section>

            </div >
        </footer >
    )
}
