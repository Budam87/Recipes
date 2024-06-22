import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import {Home} from '../pages/Home';
import {Videos} from '../pages/Videos';
import { Recipes } from '../pages/Recipes';
import { About } from '../pages/About';
import { Recipe } from '../pages/Recipe';

function App() {
  
  return (
    <main>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path='/about' element={<About/>}/>
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App
