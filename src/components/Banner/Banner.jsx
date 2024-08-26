import data from '../../assets/data.json'
import img from '../../assets/home.webp';
import "./banner.css";

const Banner = ({ src, alt, title = "" }) => {
    return (
        <header className="banner">
            <img src={img} alt={alt} />
            
        </header>
    )
}

export default Banner
