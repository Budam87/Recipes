import { SearchBar } from "../components/SearchBar";
import '../css/Recipes.css';
import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 16;
    

    const fetchRecipes = async() => {
        try {
            const response = await fetch(`http://localhost:8080/recipes`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setRecipes(data);
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(recipes.length / recipesPerPage);
    console.log('total pagees:', totalPages);

    const pageNumbersArray = Array(totalPages).fill(null);
    console.log(pageNumbersArray)
    const pageNumbers = pageNumbersArray.map((_, index) => index + 1);

    console.log('amount of pages:', pageNumbers)

    return (
        <>
            <div className="recipes-wrapper">
                <div>
                    <h1>RECIPE INDEX</h1>
                    <SearchBar className='recipes-search-bar'/>
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
                    {pageNumbers.map(pageNumber => (
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