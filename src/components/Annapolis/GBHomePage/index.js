import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import ANHero from '../ANHero';
import ANGallery from '../ANGallery';
import ANServices from '../ANServices';
import ANTestimonials from '../ANTestimonials';

export default function GBHomePage() {
    return (
        <div>
            <Navigation />

            <ANHero />

            <ANGallery />

            <div id='services'>
                <ANServices />
            </div>

            <div id='reviews'>
                <ANTestimonials />
            </div>

            <div id='contact'>
                <Footer />
            </div>
        </div>
    )
}
