import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/Recipe.css';

export function Recipe() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:8080/recipes/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setRecipe(data);
                } else {
                    setError(`Error: ${response.status} ${response.statusText}`);
                }
            } catch (error) {
                setError(`Error: ${error.message}`);
            }
        };

        fetchRecipe();
    }, [id]);

    

    if (error) {
        return <div>{error}</div>;
    }

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const ingredientsArray = recipe.ingredients.split('\n').filter(ingredient => ingredient.trim() !== '');
    console.log(ingredientsArray);

    return (
        <>
        <div className="recipe-wrapper">
            <div className="main-info">
                <h1>{recipe.title}</h1>
                <img src={recipe.photoUrl} alt={'receipe-foto'} /><div className="instructions">
                <h2>INSTRUCTIONS</h2>
                <p>{recipe.directions}</p>
            </div>

            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {ingredientsArray.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}