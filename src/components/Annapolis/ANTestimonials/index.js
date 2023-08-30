import { useLanguage } from '../../../LanguageContext';
import { englishContent, spanishContent } from './content';
import { Link } from 'react-router-dom';
import star from '../../../assets/icons/star-icon.png';
import './GBTestimonials.css';

export default function GBTestimonials() {
    const { currentLanguage, setCurrentLanguage } = useLanguage();
    const content = currentLanguage === 'english' ? englishContent : spanishContent;

    return (
        <div className='testimonials-section'>
            <div className='home-header-container testimonials-header-container'>
                <h2 className='home-header testimonials-header'>{content.testimonialsHeader}</h2>
                <a href="https://www.google.com/search?q=Isaula%27s+Beauty+Salon+Annapolis&sca_esv=561360965&sxsrf=AB5stBgeY4JX0fOm029u7oqoTT_HY6lw_g%3A1693420561070&ei=EYzvZI7dA6WyqtsP8OKCwAY&ved=0ahUKEwjOqf2Xg4WBAxUlmWoFHXCxAGgQ4dUDCA8&uact=5&oq=Isaula%27s+Beauty+Salon+Annapolis&gs_lp=Egxnd3Mtd2l6LXNlcnAiH0lzYXVsYSdzIEJlYXV0eSBTYWxvbiBBbm5hcG9saXMyCBAAGBYYHhgKSKx2UIkRWI45cAN4AJABApgBmgmgAaY3qgEPMC4xLjQuMi4zLjAuMy4xuAEDyAEA-AEBwgIIEAAYogQYsAPCAgcQIxiKBRgnwgILEC4YgAQYxwEYrwHCAhAQLhiABBgUGIcCGMcBGK8BwgIFEAAYgATCAgQQABgewgIGEAAYBRgewgIGEAAYFhgewgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAggQABiKBRiGA-IDBBgBIEGIBgGQBgK6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x89b7f6ce8f43a87b:0xaad16cac0c7efdef,1,,,," target='_blank' rel='noopener noreferrer'>
                    <button className='leave-review-testimonials'>{content.rateYourVisitButton}
                    </button>
                </a>
            </div>

            <div className='first-three-testimonials'>
                <div className='testimonials-container'>
                    {content.testimonials.slice(0, 3).map((testimonial, index) => (
                        <div className='individual-testimonial' key={index}>
                            <div className='review-details'>
                                <div className='reviewer-name-container'>
                                    <p className='reviewer-name'>{testimonial.reviewerName}</p>
                                    <div className='reviewer-image-container'>
                                        <img src={testimonial.imgSrc} className='reviewer-image' alt='Review by Dennis' />
                                    </div>
                                    <span className='stars-container'>
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                    </span>
                                    <p className='review-text'>{testimonial.reviewText}</p>
                                    <a className='review-link' href={testimonial.reviewLink} target='_blank' rel='noopener noreferrer'>
                                        <div className='my-review-link-button'>{testimonial.buttonText}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='second-three-testimonials'>
                <div className='testimonials-container'>
                    {content.testimonials.slice(3, 6).map((testimonial, index) => (
                        <div className='individual-testimonial' key={index}>
                            <div className='review-details'>
                                <div className='reviewer-name-container'>
                                    <p className='reviewer-name'>{testimonial.reviewerName}</p>
                                    <div className='reviewer-image-container'>
                                        <img src={testimonial.imgSrc} className='reviewer-image' alt='Review by Dennis' />
                                    </div>
                                    <span className='stars-container'>
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                        <img className='star' src={star} alt='Star' />
                                    </span>
                                    <p className='review-text'>{testimonial.reviewText}</p>
                                    <a className='review-link' href={testimonial.reviewLink} target='_blank' rel='noopener noreferrer'>
                                        <div className='my-review-link-button'>{testimonial.buttonText}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}



{/* <div className='individual-testimonial'>
                        <div className='review-details'>
                            <div className='reviewer-name-container'>
                                <p className='reviewer-name'>Dennis</p>
                                <div className='reviewer-image-container'>
                                    <img src={dennis} className='reviewer-image' alt='Review by Dennis' />
                                </div>
                                <span className='stars-container'>
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                </span>
                                <p className='review-text'>Great place for a men's haircut. Sometimes it's a bit of a wait, but when you're in the chair, you get the same attention to detail as anyone else. Clean up is amazing. Usually, I have to go home and shower, then it looks good the next day. Here it's just clean and flawless when you leave. Spanish only place, but 2-3 people there speak English to translate. Don't be intimidated by that; check it out.</p>

                                <a className='review-link' href="https://g.co/kgs/KPi3Uz" target='_blank' rel='noopener noreferrer'>
                                    <div className='my-review-link-button'>
                                        Review Link
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='individual-testimonial'>
                        <div className='review-details'>
                            <div className='reviewer-name-container'>
                                <p className='reviewer-name'>Jeff Smith</p>
                                <div className='reviewer-image-container'>
                                    <img src={jeff} className='reviewer-image' alt='Review by Jeff Smith' />
                                </div>
                                <span className='stars-container'>
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                </span>
                                <p className='review-text'>Great place for cut.

                                    Very few times do I go is there a wait.

                                    I get a cut with a straight razor shave.</p>

                                <a className='review-link' href="https://g.co/kgs/Pq51zc" target='_blank' rel='noopener noreferrer'>
                                    <div className='my-review-link-button'>
                                        Review Link
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='individual-testimonial'>
                        <div className='review-details'>
                            <div className='reviewer-name-container'>
                                <p className='reviewer-name'>Kevin Plessner</p>
                                <div className='reviewer-image-container'>
                                    <img src={kevin} className='reviewer-image' alt='Review by Kevin Plessner' />
                                </div>
                                <span className='stars-container'>
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                    <img className='star' src={star} alt='Star' />
                                </span>
                                <p className='review-text'>I just randomly stopped into this place while waiting for my car at Firestone (which is next door). They did an awesome job on my hair, used a real razor for the border of my neck and head (which I was not expecting), were very friendly, and best of all, it was cheap!

                                    I highly recommend this place - I will be back.</p>

                                <a className='review-link' href="https://g.co/kgs/o2PZ6d" target='_blank' rel='noopener noreferrer'>
                                    <div className='my-review-link-button'>
                                        Review Link
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div> */}
