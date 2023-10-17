import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/icons/scissors-comb-white.png';
import hamburger from '../../../assets/icons/white-hamburger-menu.png';
import './Navigation.css'

export default function Navigation() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const location = useLocation();

    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english');
    };

    const toggleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isNavOpen]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isNavOpen && navRef.current && !navRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isNavOpen]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.pageYOffset;

    //         if (currentScrollPos > lastScrollPos) {
    //             setIsScrollingDown(true);
    //         } else {
    //             setIsScrollingDown(false);
    //         }

    //         setLastScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [lastScrollPos]);

    // const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';

    const scrollToSection = (sectionId) => {
        setIsNavOpen(false);
        const sectionElement = document.getElementById(sectionId);
        // sectionElement.scrollIntoView({ behavior: 'smooth' });
        if (sectionId === 'footer') {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            const yOffset = -80;
            const topOffset = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            // sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className='nav-bar'>
            <div className='nav-options'>
                <div className='nav-logo-container'>
                    <img src={logo} className='small-logo fade-in' alt="Isaula's Logo" onClick={() => scrollToTop()} />
                </div>

                <div className='nav-name fade-in'>
                    Isaula's Beauty Salon
                </div>

                <div className='nav-logo-container'>
                    <button className='hamburger-menu fade-in' onClick={toggleNavOpen}>
                        <img src={hamburger} className='small-logo' alt='Hamburger Menu' />
                    </button>
                </div>

                {isNavOpen && <div className='backdrop'></div>}

                <div ref={navRef} className={`nav-panel ${isNavOpen ? 'nav-open' : ''}`}>
                    <button className='x-button' onClick={toggleNavOpen}>X</button>

                    <div className='panel-buttons'>
                        <div>
                            <button className='language-toggle-button panel-language-button panel-button' onClick={toggleLanguage}>
                                {currentLanguage === 'english' ? 'Español' : 'English'}
                            </button>
                        </div>

                        <div>
                            <button className='nav-button panel-button' onClick={() => scrollToSection('gallery')}>
                                {content.gallery}
                            </button>
                        </div>

                        <div>
                            <button className='nav-button panel-button' onClick={() => scrollToSection('services')}>
                                {content.services}
                            </button>
                        </div>

                        <div>
                            <button className='nav-button panel-button' onClick={() => scrollToSection('reviews')}>
                                {content.reviews}
                            </button>
                        </div>

                        <div>
                            <button className='nav-button panel-button' onClick={() => scrollToSection('footer')}>
                                {content.contact}
                            </button>
                        </div>

                        <div>
                            <Link to='/'>
                                <button className={`nav-button panel-button ${location.pathname === '/' ? 'active' : ''}`}>
                                    Glen Burnie
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Link to='/annapolis'>
                                <button className={`nav-button panel-button ${location.pathname === '/annapolis' ? 'active' : ''}`}>
                                    Annapolis
                                </button>
                            </Link>
                        </div>

                        {/* <div>
                            <button className='language-toggle-button panel-language-button panel-button' onClick={toggleLanguage}>
                                {currentLanguage === 'english' ? 'Español' : 'English'}
                            </button>
                        </div> */}

                        <div className='nav-logo-container'>
                            <img src={logo} className='big-logo panel-logo' alt="Isaula's Beauty Salon Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
