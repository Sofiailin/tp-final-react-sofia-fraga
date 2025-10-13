import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Inicio from './Pages/Inicio';
import Pokemones from './Pages/Pokemones';
import PokemonInfo from './Pages/PokemonInfo';
import Buscador from './Componentes/Buscador';
import Navbar from './Componentes/Navbar';


function App() {
  
  return (
    <>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Inicio' element={<Inicio />}/>
        <Route path='/Pokemones' element={<Pokemones />}/>
        <Route path='/PokemonInfo' element={<PokemonInfo />}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
