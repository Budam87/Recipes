import { SearchBar } from "../components/SearchBar";
import '../css/Recipes.css';
import { Card } from "../components/Card";
import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";

export function Recipes() {

    const {
        currentRecipes,
        currentPage,
        totalPages,
        handleSearch,
        handlePageChange
    } = useContext(RecipeContext);

    return (
        <>
            <div className="recipes-wrapper">
                <div>
                    <h1>RECIPE INDEX</h1>
                    <SearchBar className='recipes-search-bar' handleSearch={handleSearch}/>
                </div>
                <h2>ALL RECIPES</h2>
                <div className="all-recipes">
                    {currentRecipes.map(recipe => (
                    <Card 
                        key={recipe._id}
                        photoUrl={recipe.photoUrl}
                        title={recipe.title}
                        id={recipe._id}/>
                        
                ))}
                </div>
                <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={currentPage === pageNumber ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                ))}
                </div>
            </div>
        </>
    )
}