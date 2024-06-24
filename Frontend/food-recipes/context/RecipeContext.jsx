import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 16;
    const navigate = useNavigate();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`http://localhost:8080/recipes`);
            if (response.ok) {
                const data = await response.json();
                setRecipes(data);
                setFilteredRecipes(data);
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    };

    const handleSearch = (input) => {
        setSearchInput(input);
        setCurrentPage(1); 
        filterRecipes(input);
        navigate('/recipes');
    };

    const filterRecipes = (input) => {
        if (input.trim() === '') {
            setFilteredRecipes(recipes);
        } else {
            const filtered = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredRecipes(filtered);
        }
    };

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                currentRecipes,
                currentPage,
                totalPages,
                handleSearch,
                handlePageChange
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContext;