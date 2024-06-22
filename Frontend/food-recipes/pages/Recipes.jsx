import { SearchBar } from "../components/SearchBar";
import '../css/Recipes.css';

export function Recipes() {
    return (
        <>
            <div className="recipes-wrapper">
                <div>
                    <h1>RECIPE INDEX</h1>
                    <SearchBar className='recipes-search-bar'/>
                </div>
            </div>
        </>
    )
}