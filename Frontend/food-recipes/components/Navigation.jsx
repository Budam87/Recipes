import logo from '../assets/logo.jpg'
import '../css/Navigation.css'
import { SearchBar } from './SearchBar';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import { useState } from 'react';


export function Navigation() {

    const { handleSearch } = useContext(RecipeContext);
    const [showMenu, setShowMenu] = useState(false);  

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

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
                    <div className='search'>
                        <SearchBar className='recipes-search-bar' handleSearch={handleSearch} />
                    </div>
                </div>
                <div className='lower-div'>
                    <ul className={showMenu ? "show" : ""}>
                        <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
                        <li><Link to="/recipes" onClick={toggleMenu}>BROWSE RECIPES</Link></li>
                        <li><Link to="/videos" onClick={toggleMenu}>VIDEOS</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
                    </ul>
                </div>
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
                <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
            </div>
        </div>
    )
}