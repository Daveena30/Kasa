import data from '../../assets/data.json';
import "./card.css";
import { Link } from 'react-router-dom';

const Card = ({id, title, cover, alt}) => {
   const rental = data.rental;
   return (
       <figure className="card">
        <img src={cover} alt={alt} />

        <figcaption>
          <Link to={`/rental/${id}`}>
            <h2>{title}</h2>
          </Link>
        </figcaption>

        </figure>
   )
};

// const CardContainer = () => {
   // return (
       // <div className="cards">
           // {data.accommodations.map(({id, title, cover, alt}) => (
              //  <Card key={accommodations.id} id={accommodations.id} title={accommodations.title} cover={accommodations.cover} alt={accommodations.alt} />
           // ))}
        //</div>
    //)
//};



export default Card;

