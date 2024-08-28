import img from '../../assets/home.webp';
import "./banner.css";
import data from '../../assets/data.json'


const Banner = ({ src, alt, title = "" }) => {
    return (
        <header className="banner">
            <img src={img} alt={alt} />

            <h1>
  {data.title.split('\n').map((line, index) => (
    <span key={index}>{line}</span>
  ))}
</h1>
            
        </header>
    )
}

export default Banner
