import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <img src="#" alt="#" />

      <ul>
        <li>
          <Link className={` ${location.pathname === "/" ? "active" : ""} link`} to="/">Accueil</Link>
        </li>
        <li>
          <Link className={` ${location.pathname === "/about" ? "active" : ""} link`} to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
