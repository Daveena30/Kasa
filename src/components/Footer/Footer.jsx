import data from '../../assets/data.json';
import logo from '../../assets/footer.webp';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to="/">
      <img src={logo} alt={data.logo} />
      </Link>

      <p>© {data.year} {data.brand}. {data.copyright}</p>
    </footer>
  )
}

export default Footer
