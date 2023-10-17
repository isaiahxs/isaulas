import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
// import './GBServices.css';

export default function GBServices() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    return (
        <div className="services-section">
            <div className="home-header-container services-container">
                <h2 className="home-header">{content.homeHeader}</h2>
                <h3 className='home-subheading'>{content.servicesSubheading}</h3>
            </div>

            <div className='services-lists'>
                {/* <div className="female-cuts">
                    <h3 className='list-heading'>{content.femaleCuts.heading}</h3>
                    <h4 className='list-subheading'>{content.femaleCuts.subheading}</h4>
                    <ul className='style-list'>
                        {content.femaleCuts.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div> */}

                <div className='male-cuts'>
                    <h3 className='list-heading'>{content.maleCuts.heading}</h3>
                    <ul className='style-list'>
                        {content.maleCuts.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
