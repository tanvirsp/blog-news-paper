import './Header.css';
// import logo from '../../assets/images/logo-2023.png'
import logo from '../../assets/images/logo-2023.png'
import { FaSquareFacebook,FaYoutube, FaUser  } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className='py-4'>
            <div className='text-center'>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <nav>
                <div className='nav-bar'>
                    <ul className='social-link'>
                        <li><a href="#"><FaSquareFacebook /></a></li>
                        <li><a href="#"><FaYoutube /> </a></li>
                    </ul>
                    <ul className='nav-menu'>
                        <li><a href="#">হোম</a></li>
                        <li><a href="#">জেলার খবর</a></li>
                        <li><a href="#">জাতীয়</a></li>
                        <li><a href="#">রাজনীতি</a></li>
                        <li><a href="#">অর্থনীতি</a></li>
                        <li><a href="#">খেলাধুলা</a></li>
                        <li><a href="#">বিনোদন</a></li>
                        <li><a href="#">ভিডিও</a></li>
                    </ul>
                    <ul className='user-link'>
                        <li><CiSearch /></li>
                        <li><FaUser /> </li>
                        
                    </ul>
                </div>
                
            </nav>
        
        </header>
    );
};

export default Header;