import '../App.css'
import Footer from '../Componentes/Footer';
import Navbar from "../Componentes/Navbar";
import Pokemones from '../Componentes/Pokemones';


function Pokemon() {
  return (
    <>
      <Navbar />
      <h1>¡Aqui tendrás todos los Pokemon juntos para poder apreciarlos!</h1>
      <h2>Clickea en cada uno para ver más informacion</h2>
      <Pokemones />
      <Footer />
    </>
  )
}

export default Pokemon