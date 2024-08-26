import data from '../../assets/data.json';
import img from '../../assets/home.webp';
import Banner from '../../components/Banner/Banner';
import './home.css'

const Home = () => {

  return (
    <main id="home">
   <Banner
   src={img}
   /*alt=""
   title=""*/
   />
   <h1>Home</h1>
    </main>
  )
}

export default Home
