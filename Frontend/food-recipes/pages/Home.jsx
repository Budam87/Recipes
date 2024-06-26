import {Divider} from '../components/Divider';
import { useEffect, useState, useContext } from 'react';
import { Card } from '../components/Card';
import '../css/Home.css';

export function Home() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

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

    const mainCourseRecipes = recipes.filter(recipe => recipe.course === 'Main Course');

    console.log(mainCourseRecipes)

    const randomMainCourseRecipes = mainCourseRecipes
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);

    console.log("Randominiai receptai", randomMainCourseRecipes);

    const chickenCourseRecipes = recipes.filter(recipe =>
        recipe.mainIngredient === 'Chicken'
    );

    const randomChickenCourseRecipes = chickenCourseRecipes
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);

    const americanRecipes = recipes.filter(recipe =>
        recipe.cuisine === 'American'
    );
    
    const randomAmericanRecipes = americanRecipes
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);

    return (
        <>
            <div>
                <Divider text='DINNER TONIGHT'/>
            </div>
            <div className='cards-wrapper'>
                {randomMainCourseRecipes.map(recipe => (
                    <Card 
                        key={recipe._id}
                        photoUrl={recipe.photoUrl}
                        title={recipe.title}
                        id={recipe._id}/>
                        
                ))}
            </div>

            <div>
                <Divider text='CHICKEN COURSES'/>
            </div>
            <div className='cards-wrapper'>
                {randomChickenCourseRecipes.map(recipe => (
                    <Card 
                        key={recipe._id}
                        photoUrl={recipe.photoUrl}
                        title={recipe.title}
                        id={recipe._id}
                    />
                ))}
            </div>

            <div>
                <Divider text='AMERICAN RECIPES'/>
            </div>
            <div className='cards-wrapper'>
                {randomAmericanRecipes.map(recipe => (
                    <Card 
                        key={recipe._id}
                        photoUrl={recipe.photoUrl}
                        title={recipe.title}
                        id={recipe._id}
                    />
                ))}
            </div>
        </>
    )
}