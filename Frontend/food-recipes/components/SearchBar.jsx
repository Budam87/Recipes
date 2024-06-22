import '../css/SearchBar.css';

export function SearchBar({ className }) {
    return (
        <div className={`search-bar ${className}`}>
            <input type="text" placeholder='Search the recipe'/> 
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass" ></i></button>
        </div>
    )
}