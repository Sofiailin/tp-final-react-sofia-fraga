import { Logo } from "./Icons";
import '../App.css'

const Navbar = () => {

    return (
        <nav>
           <Logo />
           <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="Inicio">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Pokemones">Pokemones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Buscar">Buscar</a>
                </li>
            </ul>
        </nav>
        )
    }
    
export default Navbar

