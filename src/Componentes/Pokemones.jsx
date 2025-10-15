import '../App.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import usePokemones from '../Hooks/usePokemones'
import DetallePokemon from './DetallePokemon'
import Buscador from './Buscador'
import { useState } from 'react'

function Pokemon({ id, nombre, imagen, types, altura, peso }) {
  const [mostrarDetalle] = useState(false);

  // Función para abrir la card en una nueva página
  const abrirEnNuevaPagina = () => {
    const content = `
    <html>
      <head>
        <title>Informacion sobre ${nombre} </title>
        <style>
          body { font-family: Arial; padding: 20px; background: #f8f8f8; }
          .card { background: #3B4CCA; border-radius: 8px; box-shadow: 0 2px 8px #ccc; padding: 10px; max-width: 400px; margin: auto; }
          .type-badge { display: center; background: #B3A125; border-radius: 4px; padding: 2px 6px; margin: 2px; }
          .label { font-weight: bold; }
          img { width: 200px; }
        </style>
      </head>
      <body>
        <div class="card">
          <img src="${imagen}" alt="${nombre}" />
          <h1>#${id} - ${nombre}</h1>
          <div>
            <p><span class="label">Altura:</span> ${altura / 10} m</p>
            <p><span class="label">Peso:</span> ${peso / 10} kg</p>          
          </div>
          <div>
            <span class="label">Tipos:</span>
            <ul>
              ${(types || []).map(t => `<li class="type-badge">${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      </body>
    </html>
  `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <div className="pokemon-card">
      <img src={imagen} alt={nombre} className="pokemon-imagen" />
      <p className="pokemon-titulo">
        <button
          className="btn-info"
          onClick={abrirEnNuevaPagina}
        >
          +INFO
        </button>
        <span>{id} - {nombre}</span>
      </p>
      {mostrarDetalle && ('')}
    </div>
  );
}

function Pokemones() {
  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => {
    setMostrar({ mostrar: false, pokemon: {} })
    setBusqueda('')
  }

  const buscarPokemon = async (e) => {
    e.preventDefault()
    if (!busqueda) return
    const pokemon = await searchPokemon(busqueda)
    setMostrar({ mostrar: true, pokemon })
  }

  return (
    <>
      <DetallePokemon {...mostrar} cerrar={noVerPokemon} />
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon} />
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando />}
        endMessage={
          <h3 className='titulo' style={{ gridColumn: '1/6' }}>Lo siento, no hay más pokemones por mostrar</h3>
        }
        className='pokemon-container'
      >
        {pokemones.map(pokemon =>
          <Pokemon
            {...pokemon}
            key={pokemon.id}
            verPokemon={() => verPokemon(pokemon)}
            tipos={pokemon.tipos}
            altura={pokemon.altura}
            peso={pokemon.peso}
            states={pokemon.states}
          />
        )}
      </InfiniteScroll>
    </>
  )
}

export default Pokemones