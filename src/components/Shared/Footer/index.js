import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/scissors-comb-white.png';
import map_pin from '../../../assets/icons/map-pin.svg';
import phone from '../../../assets/icons/phone-icon.svg';
// import email from '../../../assets/icons/mail-icon.svg';
import facebook from '../../../assets/icons/facebook-logo.svg';
import instagram from '../../../assets/icons/instagram-logo.svg';
import './Footer.css';


{/* <li>
                <button className='nav-button' onClick={() => scrollToSection('services')}>
                    {content.services}
                </button>
            </li> */}
export default function Footer() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer-container'>
            <div className='footer-section'>
                <section className='logo-section'>
                    {/* <Link to='/'> */}
                    <img src={logo} className='big-logo' alt="Big Isaula's Logo" onClick={() => scrollToTop()} />
                    {/* </Link> */}
                </section>

                <section className='second-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            Glen Burnie
                        </li>
                        <div className='footer-options'>
                            <li>
                                <a href="https://www.google.com/maps/place/Isaula's+Beauty+Salon+LLC/@39.1592102,-76.6207809,15z/data=!4m6!3m5!1s0x89b7fcdd79a6aeed:0xa55be85257c1581f!8m2!3d39.1592102!4d-76.6207809!16s%2Fg%2F1v8l0hr7?entry=ttu" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' />
                                        <p className='footer-icon-description'>
                                            {/* <img src={map_pin} className='footer-icon GB-map-icon' alt='Map Pin Icon' /> */}
                                            7574 Ritchie Hwy, Glen Burnie, MD 21061
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='tel:+14107606422'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (410) 760-6422
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.GBtimes}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.GBtimesSunday}
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
                                        <img src={map_pin} className='footer-icon AN-map-icon' alt='Map Pin Icon' />
                                        <p className='footer-icon-description'>
                                            {/* <img src={map_pin} className='footer-icon AN-map-icon' alt='Map Pin Icon' /> */}
                                            2128 Forest Dr, Annapolis, MD 21401
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='tel:+14102668950'>
                                    <div className='footer-icon-container'>
                                        <img src={phone} className='footer-icon' alt='Phone Icon' />
                                        <p className='footer-icon-description'>
                                            (410) 266-8950
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.ANtimes}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className='footer-icon-container'>
                                    <p className='footer-icon-description'>{content.ANtimesSunday}
                                    </p>
                                </div>
                            </li>
                        </div>
                    </ul>
                </section >

                <section className='fourth-footer-section'>
                    <ul className='footer-options-container'>
                        <li className='footer-heading'>
                            {content.socials}
                        </li>

                        <div className='footer-options'>
                            <li>
                                <a href="https://www.facebook.com/IsaulasBeautySalonII" target='_blank' rel='noopener noreferrer'>
                                    <div className='footer-icon-container'>
                                        <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                        <p className='footer-icon-description'>Facebook</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/isaulasbs/' target='_blank' rel='noopener noreferrer'>
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
            <div className='credits-container'>
                <p className='credits-created-by'>{content.credits}</p>
                <a href='https://www.isaiahxs.com/' target='_blank' rel='noopener noreferrer' className='isaiah'>
                    Isaiah Sinnathamby
                </a>
            </div>
        </footer >
    )
}
