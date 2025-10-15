import { Logo } from "./Icons";
import '../App.css'

const Navbar = () => {

    return (
        <nav>
            <Logo />
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="Inicio">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Pokemones">Pokemones</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

