import React, { useRef, useEffect } from 'react';
import behind_lines from '../../../assets/images/GBCuts/behind-lines.png';
import blade from '../../../assets/images/GBCuts/blade.jpg';
import blue_dye from '../../../assets/images/GBCuts/blue-dye.jpg';
import client_cut from '../../../assets/images/GBCuts/client-cut.png';
import curls from '../../../assets/images/GBCuts/curls.jpg';
import fade_behind from '../../../assets/images/GBCuts/fade-behind.png';
// import fili from '../../../assets/images/GBCuts/fili.jpg';
import heart_design from '../../../assets/images/GBCuts/heart-design.png';
import highlight_curls from '../../../assets/images/GBCuts/highlight-curls.jpg';
import kids_haircut from '../../../assets/images/GBCuts/kids-haircut.png';
import line_behind from '../../../assets/images/GBCuts/line-behind.jpg';
import makeup from '../../../assets/images/GBCuts/makeup.png';
import red_dye from '../../../assets/images/GBCuts/red-dye.jpg';
import side_lines from '../../../assets/images/GBCuts/side-lines.png';
import womans_style from '../../../assets/images/GBCuts/womans-style.png';
import './GBGallery.css';

export default function GBGallery() {
    const galleryRef = useRef(null);

    useEffect(() => {
        // Auto-scroll the gallery
        const gallery = galleryRef.current;
        let scrollAmount = 0;
        let slideTimer = setInterval(() => {
            gallery.scrollLeft = scrollAmount;
            scrollAmount += 2; // Adjust the scrolling speed as needed
            if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
                scrollAmount = 0;
            }
        }, 50); // Adjust the interval for smoothness

        // Pause auto-scrolling when user interacts with the gallery
        gallery.addEventListener('mouseover', () => {
            clearInterval(slideTimer);
        });
        gallery.addEventListener('mouseout', () => {
            slideTimer = setInterval(() => {
                gallery.scrollLeft = scrollAmount;
                scrollAmount += 2; // Adjust the scrolling speed as needed
                if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
                    scrollAmount = 0;
                }
            }, 50); // Adjust the interval for smoothness
        });

        return () => {
            clearInterval(slideTimer);
        };
    }, []);

    return (
        <div className='gallery-outer-container'>
            <div className='gallery-inner-container' ref={galleryRef}>
                <img src={behind_lines} alt='Image 0' className='gallery-image' />
                <img src={blade} alt='Image 1' className='gallery-image' />
                <img src={blue_dye} alt='Image 2' className='gallery-image' />
                <img src={client_cut} alt='Image 3' className='gallery-image' />
                <img src={curls} alt='Image 4' className='gallery-image' />
                <img src={fade_behind} alt='Image 5' className='gallery-image' />
                {/* <img src={fili} alt='Image 6' className='gallery-image' /> */}
                <img src={heart_design} alt='Image 7' className='gallery-image' />
                <img src={highlight_curls} alt='Image 8' className='gallery-image' />
                <img src={kids_haircut} alt='Image 9' className='gallery-image' />
                <img src={line_behind} alt='Image 10' className='gallery-image' />
                <img src={makeup} alt='Image 11' className='gallery-image' />
                <img src={red_dye} alt='Image 12' className='gallery-image' />
                <img src={side_lines} alt='Image 13' className='gallery-image' />
                <img src={womans_style} alt='Image 14' className='gallery-image' />
            </div>
        </div>
    );
}