import data from '../../assets/data.json';
import './host.css';

const Host = ({ name, picture }) => {

    const [firstname, lastname] = name.split(" ");
  
    return (
      <figure className="host">
  
        <figcaption>
          {firstname}
          <br />
          {lastname}
        </figcaption>
  
        <img
          src={picture || data.host.picture}
          alt={name || data.host.name}
        />
  
      </figure>
    )
  }
  
  export default Host
