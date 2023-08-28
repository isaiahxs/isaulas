import './GBServices.css';

export default function GBServices() {
    return (
        // <div className="services-section">
        //     <div className="home-header-container">
        //         <h2 className="home-header">Our Services</h2>
        //     </div>
        //     <div>first come first serve, appointments too</div>
        //     <div className="female-cuts">
        //         $30 Haircuts
        //         Keratin Straightening
        //         Tint
        //         Highlights
        //         Perms
        //         Blow Dry
        //         Styling
        //         Eyebrows
        //         Makeup
        //     </div>

        //     <div className='male-cuts'>
        //         Kids Haircut $20
        //         Haircut $25
        //         Haircut and Eyebrows $25
        //         Haircut and Beard $30
        //     </div>
        // </div>






        // <div className="services-section">
        //     <div className="home-header-container services-container">
        //         <h2 className="home-header services-heading">Our Services</h2>
        //         <h3 className='services-subheading'>First come, first served. Appointments available.</h3>
        //     </div>

        //     <div className='services-tables'>
        //         <div className="female-cuts">
        //             <div className='table-heading-container'>
        //                 <h3 className='table-heading'>Female Cuts</h3>
        //             </div>
        //             <table>
        //                 <tr>
        //                     <td>$30 Haircuts</td>
        //                     <td>Keratin Straightening</td>
        //                     <td>Tint</td>
        //                     <td>Highlights</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Perms</td>
        //                     <td>Blow Dry</td>
        //                     <td>Styling</td>
        //                     <td>Eyebrows</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Makeup</td>
        //                     <td></td>
        //                     <td></td>
        //                     <td></td>
        //                 </tr>
        //             </table>
        //         </div>

        //         <div className='male-cuts'>
        //             <div className='table-heading-container'>
        //                 <h3 className='table-heading'>Male Cuts</h3>
        //             </div>
        //             <table>
        //                 <tr>
        //                     <td>Kids Haircut $20</td>
        //                     <td>Haircut $25</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Haircut and Eyebrows $25</td>
        //                     <td>Haircut and Beard $30</td>
        //                 </tr>
        //             </table>
        //         </div>
        //     </div>
        // </div>



        <div className="services-section">
            <div className="home-header-container services-container">
                <h2 className="home-header services-heading">Our Services</h2>
                <h3 className='services-subheading'>First come, first served. Appointments available.</h3>
            </div>

            <div className='services-lists'>
                <div className="female-cuts">
                    <h3 className='list-heading'>Women's Styles</h3>
                    <ul className='style-list'>
                        <li>$30 Haircuts</li>
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