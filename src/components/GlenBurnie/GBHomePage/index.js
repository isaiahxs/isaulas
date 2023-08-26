import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import GBHero from '../GBHero';
import GBGallery from '../GBGallery';
import GBTestimonials from '../GBTestimonials';

export default function GBHomePage() {
    return (
        <div>
            <Navigation />
            <GBHero />
            <GBGallery />
            <GBTestimonials />
            <Footer />
        </div>
    )
}