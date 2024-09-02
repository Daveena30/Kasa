import { Link } from 'react-router-dom';
import data from '../../assets/data.json';
import img from '../../assets/home.webp';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './home.css';


const Home = () => {

  return (
    <main id="home">
   <Banner
   src={img}
   alt="data.home"
   title="data.title"
   />

<section className="accomodation-list">
  {data.rental.map(({id, title, cover, alt}) => 
    <article key={id} className='accommodation-card'>
      <Link to={`/rental/${id}`}>
        <Card
        id={id}
        title={title}
        cover={cover}
        alt={alt}
        />
        </Link>
    </article>
  )}

</section>

    </main>
  )
}

export default Home
