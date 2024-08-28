import data from '../../assets/data.json';
import "./card.css";
import { Link } from 'react-router-dom';

const Card = ({id, title, cover, alt}) => {
   return (
       <figure className="card">
        <img src={cover} alt={alt} />

        <figcaption>
          <Link to={`/accommodations/${id}`}>
            <h2>{title}</h2>
          </Link>
        </figcaption>

        </figure>
   )
};



export default Card;

