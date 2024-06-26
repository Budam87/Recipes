import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import {Home} from '../pages/Home';
import {Videos} from '../pages/Videos';
import { Recipes } from '../pages/Recipes';
import { About } from '../pages/About';
import { Recipe } from '../pages/Recipe';
import { RecipeProvider } from '../context/RecipeContext';
import { EditRecipe } from '../components/RecipeEdit';

function App() {
  
  return (
            <RecipeProvider>
                <main>
                    <div id="top">
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/videos" element={<Videos />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path='/about' element={<About />} />
                            <Route path="/recipe/:id" element={<Recipe />} />
                            <Route path="/recipes/edit/:id" element={<EditRecipe />} />
                        </Routes>
                        <Footer />
                    </div>
                </main>
            </RecipeProvider>
  )
}

export default App
