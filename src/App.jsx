import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Inicio from './Pages/Inicio';
import Pokemon from './Pages/Pokemon';
import Buscar from './Pages/Buscar';


function App() {
  
  return (
    <>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Inicio' element={<Inicio />}/>
        <Route path='/Pokemones' element={<Pokemon />}/>
        <Route path='/Buscar' element={<Buscar />}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
