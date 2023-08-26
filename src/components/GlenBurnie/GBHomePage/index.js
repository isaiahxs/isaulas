import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import GBHero from '../GBHero';
import GBTestimonials from '../GBTestimonials';

export default function GBHomePage() {
    return (
        <div>
            <Navigation />
            <GBHero />
            <GBTestimonials />
            <Footer />
        </div>
    )
}