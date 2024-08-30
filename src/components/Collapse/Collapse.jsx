import data from '../../assets/data.json';
import './collapse.css';

const Collapse = ({title, content}) => {
    console.log(data);
    return (
        <details className='collapse'>
            <summary className='collapse-title'>{title}</summary>
            <p className='collapse-content'>{content}</p>
        </details>
    );
};

export default Collapse