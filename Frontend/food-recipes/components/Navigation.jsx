import logo from '../assets/logo.jpg'
import '../css/Navigation.css'
import { SearchBar } from './SearchBar';
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <div className='right-block'>
                <div className='upper-div'>
                <a href=""><i className="fa-brands fa-facebook "></i></a>
                <a href=""><i className="fa-brands fa-pinterest "></i></a>
                <a href=""><i className="fa-brands fa-square-instagram "></i></a>
                <a href=""><i className="fa-brands fa-youtube "></i></a>
                <a href=""><i className="fa-brands fa-square-twitter"></i></a>
                <SearchBar></SearchBar>
            </div>
                <div className='lower-div'>
                    <ul>
                        <li>HOME</li>
                        <li>BROWSE RECIPES</li>
                        <li>VIDEOS</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}