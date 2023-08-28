import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/scissors-comb-white.png';
import './Navigation.css'

export default function Navigation() {
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > lastScrollPos;
            const navBar = document.querySelector('.nav-bar');

            if (isScrollingDown) {
                // User is scrolling down, hide the navigation bar
                navBar.style.transform = 'translateY(-100%)';
            } else {
                // User is scrolling up, show the navigation bar
                navBar.style.transform = 'translateY(0)';
            }

            // Remember the current scroll position for the next scroll event
            setLastScrollPos(currentScrollPos);
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='nav-bar'>
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
                        Services
                    </button>
                </li>

                <li>
                    <button className='nav-button' onClick={() => scrollToSection('reviews')}>
                        Reviews
                    </button>
                </li>
                {/* <li>
                    <button className='contact' onClick={() => scrollToSection('contact')}>
                        Contact
                    </button> */}
                {/* <a href='/contact'>Contact</a> */}
                {/* </li> */}
            </ul>
        </nav>
    )
}