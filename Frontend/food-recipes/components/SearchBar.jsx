import '../css/SearchBar.css';

export function SearchBar() {
    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search the recipe'/> 
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass" ></i></button>
        </div>
    )
}