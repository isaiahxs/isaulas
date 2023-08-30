import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import GBHero from '../GBHero';
import GBGallery from '../GBGallery';
import GBServices from '../GBServices';
import GBTestimonials from '../GBTestimonials';

export default function GBHomePage() {
    return (
        <div>
            <Navigation />

            <GBHero id='hero' />

            <GBGallery />

            <div id='services'>
                <GBServices />
            </div>

            <div id='reviews'>
                <GBTestimonials />
            </div>

            <div id='contact'>
                <Footer />
            </div>
        </div>
    )
}
