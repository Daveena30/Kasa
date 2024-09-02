import "./rating.css";

const Rating = ({ rating }) => {
    return (
    <figure className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          className={`fa-solid fa-star ${i < rating ? 'primary' : 'secondary'}`}
          key={i}
        />
      ))}
    </figure>
  );
 };
    

export default Rating
