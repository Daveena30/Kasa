
import "./rating.css";

const Rating = ({ rating }) => {

    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <i
                className={`fa-solid fa-star ${i < rating ? 'primary' : 'secondary'}`}
                key={i}
            ></i>
        );
    }

    return (
        <figure className="rating">
            {stars}
        </figure>
    );
}


export default Rating
