import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import { Button } from './Button';

export function EditRecipe() {
    const { recipes, updateRecipe } = useContext(RecipeContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ title: '', ingredients: '' });

    useEffect(() => {
        const recipeToEdit = recipes.find(recipe => recipe._id === id);
        if (recipeToEdit) {
            setRecipe(recipeToEdit);
        }
    }, [id, recipes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(id, recipe);
        navigate('/recipes');
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={recipe.title} onChange={handleChange} />
                </label>
                <label>
                    Ingredients:
                    <textarea type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
                </label>
                <Button type="submit" text='Update Recipe'/>
            </form>
        </div>
    );
}