import '../App.css'
import Footer from '../Componentes/Footer';
import Navbar from "../Componentes/Navbar";
import Pokemones from '../Componentes/Pokemones';

function Pokemon() {
  return (
    <>
      <Navbar />
      <h1>¡Aqui tendrás todos los Pokemon juntos para poder apreciarlos!</h1>
      <h2>Clickea en +INFO uno para ver un poco mas de informacion</h2>
      <h2>... o buscalo por su ID o nombre en el buscador!</h2>
      <Pokemones />
      <Footer />
    </>
  )
}

export default Pokemon