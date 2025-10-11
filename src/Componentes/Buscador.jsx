import '../App.css'
import { Buscar } from './Iconcs'

function Buscador  () {

    return (
    <>
     <h3 className='titulo'> Bienvenido a la Pokedex de la Profesora Sofi </h3>
     <h4 className='titulo'>Aqui puedes buscar y conocer todo sobre los Pokemon </h4>
     <section className='container-buscador'>
        <input type='text' placeholder=' Encuentra tu Pokemon' className='input-buscar'/>
        <button className='btn-buscar'> Buscar Pokemon 
            <Buscar />
        </button>
     </section>
       
    </>
    )
}

export default Buscador