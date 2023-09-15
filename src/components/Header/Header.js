import './Header.module.css';
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <Link to="/">Logo</Link>
            <nav>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/about">Sobre nós</NavLink>
                <NavLink to="/services">Serviços</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
            </nav>
        </header>
    );
}