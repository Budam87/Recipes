import logo from '../assets/logo.jpg'
import '../css/Navigation.css'
import { SearchBar } from './SearchBar';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';


export function Navigation() {

    const { handleSearch } = useContext(RecipeContext);

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
                <SearchBar className='recipes-search-bar' handleSearch={handleSearch} />
            </div>
                <div className='lower-div'>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/recipes">BROWSE RECIPES</Link></li>
                        <li><Link to="/videos">VIDEOS</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}