import './GBServices.css';

export default function GBServices() {
    return (
        <div className="services-section">
            <div className="home-header-container services-container">
                <h2 className="home-header services-heading">Our Services</h2>
                <h3 className='services-subheading'>First come, first served. Appointments available.</h3>
            </div>

            <div className='services-lists'>
                <div className="female-cuts">
                    <h3 className='list-heading'>Women's Styles</h3>
                    <h4 className='list-subheading'>Contact us for consultation and pricing details</h4>
                    <ul className='style-list'>
                        <li>Haircuts $30</li>
                        <li>Keratin Straightening</li>
                        <li>Tint</li>
                        <li>Highlights</li>
                        <li>Perms</li>
                        <li>Blow Dry</li>
                        <li>Styling</li>
                        <li>Eyebrows</li>
                        <li>Makeup</li>
                    </ul>
                </div>

                <div className='male-cuts'>
                    <h3 className='list-heading'>Men's Styles</h3>
                    <ul className='style-list'>
                        <li>Kid's Haircut $20</li>
                        <li>Haircut $25</li>
                        <li>Haircut and Eyebrows $25</li>
                        <li>Haircut and Beard $30</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}