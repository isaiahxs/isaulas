import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/scissors-comb-white.png';
import './Navigation.css'

export default function Navigation() {
    return (
        <nav className='nav-bar'>
            <ul className='nav-options'>
                <Link to='/'>
                    <img src={logo} className='small-logo' alt="Isaula's Logo" />
                </Link>

                <li>
                    <a href='/'>Home</a>
                </li>

                <li>
                    <a href='/about'>About</a>
                </li>

                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}