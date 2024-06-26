import logo from '../assets/logo.jpg'
import '../css/Navigation.css'
import { SearchBar } from './SearchBar';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import { useState } from 'react';


export function Navigation() {

    const { handleSearch } = useContext(RecipeContext);
    

    return (
        <div className='navbar'>
            <div className='burger-img'>
                <img src={logo} alt="logo" />
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='right-block'>
                <div className='upper-div'>
                    <div className='link-div'>
                        <a href=""><i className="fa-brands fa-facebook "></i></a>
                        <a href=""><i className="fa-brands fa-pinterest "></i></a>
                        <a href=""><i className="fa-brands fa-square-instagram "></i></a>
                        <a href=""><i className="fa-brands fa-youtube "></i></a>
                        <a href=""><i className="fa-brands fa-square-twitter"></i></a>
                    </div>
                    <div className='search'>
                        <SearchBar className='recipes-search-bar' handleSearch={handleSearch} />
                    </div>
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