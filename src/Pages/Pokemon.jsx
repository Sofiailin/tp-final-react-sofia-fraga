import '../App.css'
import Footer from '../Componentes/Footer';
import Navbar from "../Componentes/Navbar";
import Pokemones from '../Componentes/Pokemones';


function Pokemon() {
  return (
    <> 
    <Navbar />
    <h1>¡Bienvenid@ a la Pokédex de la Dra. Sofi!</h1>
    <Pokemones/>
    
    <Footer />    
    </>
  )
}

export default Pokemon