import React, { useEffect, useRef } from 'react';
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import GBHero from '../GBHero';
import GBGallery from '../GBGallery';
import GBServices from '../GBServices';
import GBTestimonials from '../GBTestimonials';
import './GBHomePage.css';

export default function GBHomePage() {

    const galleryRef = useRef(null);
    const servicesRef = useRef(null);
    const testimonialsRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        if (testimonialsRef.current) {
            observer.observe(testimonialsRef.current);
        }

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }

            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }

            if (testimonialsRef.current) {
                observer.unobserve(testimonialsRef.current);
            }

            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Navigation />

            <GBHero id='hero' />

            <div ref={galleryRef} className='body-fade-in' id='gallery'>
                <GBGallery />
            </div>

            <div ref={servicesRef} className='body-fade-in' id='services'>
                <GBServices />
            </div>

            <div ref={testimonialsRef} className='body-fade-in' id='reviews'>
                <GBTestimonials />
            </div>

            <div ref={footerRef} className='body-fade-in' id='contact'>
                <Footer />
            </div>
        </div>
    )
}
