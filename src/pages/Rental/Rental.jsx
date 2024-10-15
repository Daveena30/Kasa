import { Navigate, useParams } from 'react-router-dom';
import data from '../../assets/data.json';
import Carousel from '../../components/carousel/Carousel';
import Collapse from '../../components/collapse/Collapse';
import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';
import "./rental.css";



const Rental = () => {
  const { id } = useParams();

  const card = data.rental.find(
    (card) => card.id === id
  );

  if (!card) return <Navigate to="/404" />

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
            {card.tags.map((tag) =>

              <li key={tag}>
                <label>{tag}</label>
              </li>

            )}
          </ul>
        </header>

        <figure className='figure'>
          <Rating rating={card.rating} />

          <Host
            name={card.host.name}
            picture={card.host.picture}
          />
        </figure>
      </section>

      <footer>
        <Collapse
          title={data.text}
          content={card.description}
        />

        <Collapse
          title={data.list}
          content={card.equipments}
        />
      </footer>

    </main>
  )
}

export default Rental
