import '../css/SearchBar.css';
import { useState, useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

export function SearchBar({ className }) {

    const { handleSearch } = useContext(RecipeContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <div className={`search-bar ${className}`}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search the recipe' value={searchTerm} onChange={handleChange}/> 
                <button className='search-btn'><i className="fa-solid fa-magnifying-glass" ></i></button>
            </form>
        </div>
    )
}