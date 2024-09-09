import "./banner.css";




const Banner = ({ src, alt, title = "" }) => {
    return (
        <header className="banner">
            <img src={src} alt={alt} />

            { title && <h1>{title.slice(0, 11)}<br/>{title.slice(11)}</h1> }

        </header>
    )
};

export default Banner






