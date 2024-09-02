import { useParams } from 'react-router-dom';
import data from '../../assets/data.json';
import Error from '../Error/Error';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import "./rental.css";


const Rental = () => {

    const { id } = useParams();
  
    const card = data.rental.find(
      (card) => card.id === id
    );
  
    if (!card) return <Error />
  
    return (
      <main id="rental">
  
        <Carousel
          pictures={card.pictures}
          alt={card.title}
        />
  
        <section>
          <header>
            <h1>{card.title}</h1>
            <p>{card.location}</p>
  
            <ul>
              { card.tags.map((tag) =>
  
                <li key={tag}>
                  <label>{tag}</label>
                </li>
  
              )}
            </ul>
          </header>
  
          <figure>
            <Rating rating={card.rating} />
  
            <Host
              name={card.host.name}
              picture={card.host.picture}
            />
          </figure>
        </section>
  
        <footer>
        <Collapse title="Description" content={card.description} />
  
        <Collapse title="Équipements" content={card.equipments.join(', ')} />
        </footer>
  
      </main>
    )
  }
  
  export default Rental
