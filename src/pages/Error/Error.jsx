import data from '../../assets/data.json';
import './error.css'

const Error = () => {

  return (
    <main id="error">
    <div className="error-content">
      <h1>{data.code}</h1>
      <p>{data.error}</p>
      <a href="/">{data.link}</a>
    </div>
  </main>
  );
}

export default Error
