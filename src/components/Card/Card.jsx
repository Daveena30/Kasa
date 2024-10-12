// Card.js
import "./card.css";

const Card = ({ title, cover, alt }) => {
  return (
    <figure className="card">
      <img src={cover} alt={alt} />
      <figcaption>
        <h2>{title}</h2>
      </figcaption>
    </figure>
  );
}; 

export default Card;









