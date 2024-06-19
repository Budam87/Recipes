import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

function App() {
  
  return (
    <main>
      <div>
        <Navigation />
        <Routes>
          {/* <Route path="/videos" element={<Videos/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path='/about' element={<About/>}/> */}
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App
