import data from '../../assets/data.json';
import './host.css';

const Host = ({ name = data.host.name, picture = data.host.picture }) => (
  <figure className="host">
    <figcaption>{name.split(' ').join('\n')}</figcaption>
    <img src={picture} alt={name} />
  </figure>
);  
  

  export default Host
  
