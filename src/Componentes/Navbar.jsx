import { Logo } from "./Iconcs";
import '../App.css'

const Navbar = () => {

    return (
        <nav>
           <Logo />
           <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="App.jsx">Pokemones</a>
                </li>
            </ul>
        </nav>
        )
    }
    
export default Navbar

