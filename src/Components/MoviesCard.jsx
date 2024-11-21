import Heading from "./Heading";
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.png";
import movie3 from "../assets/movie3.png";
import movie4 from "../assets/movie4.png";
import movie5 from "../assets/movie5.png";
import movie6 from "../assets/movie6.png";
import movie7 from "../assets/movie7.png";
import movieD from "../assets/movieD.png";
import movieE from "../assets/movieE.png";
import movieF from "../assets/movieF.png";
import movie8 from "../assets/movie8.png";
import movie9 from "../assets/movie9.png";
import ImageTag from "./ImageTag";

function MoviesCard() {
  const trendingMovies = [movie1, movie2, movie3, movie4, movie5, movie6];
  const LatestMovies = [movieD, movieE, movieF, movie7, movie8, movie9];

  return (
    <div className="movies-container">
      <div className="movie-card">
        <Heading title="Trending Movies" styleclass="card-heading" />
        {trendingMovies.map((movie, index) => (
          <ImageTag key={index} img={movie} styleclass="movie-img" />
        ))}
      </div>
      <div className="movie-card">
        <Heading title="New Releases" styleclass="card-heading" />
        {LatestMovies.map((movie, index) => (
          <ImageTag key={index} img={movie} styleclass="movie-img" />
        ))}
      </div>
    </div>
  );
}

export default MoviesCard;