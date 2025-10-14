import '../App.css'

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {

    return (
        <>
            <form className='container-buscador' onSubmit={buscarPokemon}>
                <input type='text' placeholder=' Encuentra tu Pokemon' className='input-buscar'
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)} />
                <button className='btn-buscar' type='submit'>
                    Buscar Pokemon
                </button>
            </form>
        </>
    )
}

export default Buscador