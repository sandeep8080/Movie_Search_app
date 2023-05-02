import "./MovieCard.css";

type MovieCardProps = {
  searchItem: {
    Title: string;
    Poster: string;
    Type: string;
    Year: string;
  };
};
const MovieCard = (props: MovieCardProps) => {
  const { Title, Poster, Type, Year } = props.searchItem;
  return (
    <article className="movie-container">
      <img className="movie-img" src={Poster} alt={Title} />
      <h3>{Title}</h3>
      <p>
        {Type},<span>{Year}</span>
      </p>
    </article>
  );
};

export default MovieCard;
