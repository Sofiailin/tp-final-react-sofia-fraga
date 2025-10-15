import '../App.css'
import Footer from '../Componentes/Footer';
import Navbar from "../Componentes/Navbar";

function Inicio() {
  return (
    <>
      <Navbar />
      <h1>¡Bienvenid@ a la Pokédex de la Profesora Sofi!</h1>
      <h2>El mundo está lleno de maravillas, ¡y cada una tiene un nombre!</h2>
      <p>Entra al corazón de nuestra Pokédex y únete a la misión de conocer más a estas increíbles criaturas.</p>
      <p> Ya seas un Entrenador experimentado buscando la habilidad perfecta,
        o un Profesor curioso investigando nuevos datos, este es tu destino. </p>
      <p>Desde el majestuoso Charizard hasta el diminuto Caterpie,
        cada busqueda te acerca un paso más a convertirte en un Maestro Pokémon.</p>
      <img src="https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20170829165448/Misty_serie_SL.png" alt="Misty" />
      <Footer />
    </>
  )
}

export default Inicio