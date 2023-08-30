import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/scissors-comb-white.png';
import './Navigation.css'

export default function Navigation() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > lastScrollPos) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    const navBarClass = isScrollingDown ? 'nav-bar hidden' : 'nav-bar';

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={navBarClass}>
            <ul className='nav-options'>
                <Link to='/'>
                    <img src={logo} className='small-logo' alt="Isaula's Logo" />
                </Link>

                {/* <li>
                    <a href='/'>Glen Burnie</a>
                </li> */}

                <li>
                    <a href='/about'>Annapolis</a>
                </li>

                <li>
                    <button className='nav-button' onClick={() => scrollToSection('services')}>
                        {content.services}
                    </button>
                </li>

                <li>
                    <button className='nav-button' onClick={() => scrollToSection('reviews')}>
                        {content.reviews}
                    </button>
                </li>
            </ul>
        </nav>
    )
}
