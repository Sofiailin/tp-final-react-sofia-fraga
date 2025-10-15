import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Pokemon from './Pages/Pokemon';
import DetallePokemon from './Componentes/DetallePokemon';

function App() {

  return (
    <>
      <div >
        <Router>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Pokemones' element={<Pokemon />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
