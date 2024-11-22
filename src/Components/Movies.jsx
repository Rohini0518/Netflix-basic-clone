import Heading from "./Heading";
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.png";
import movie3 from "../assets/movie3.png";
import movie4 from "../assets/movie4.png";
import movie5 from "../assets/movie5.png";
import movie6 from "../assets/movie6.png";
import movie7 from "../assets/movie7.png";
import movie8 from "../assets/movie8.png";
import movie9 from "../assets/movie9.png";
import movie10 from "../assets/movie10.png";
import movie11 from "../assets/movie11.png";
import movie12 from "../assets/movie12.png";
import Image from "./Image";

function Movies() {
  const trendingMovies = [movie1, movie2, movie3, movie4, movie5, movie6];
  const latestMovies = [movie10, movie11, movie12, movie7, movie8, movie9];

  return (
    <div className="movies-container">
      <div className="movie-card">
        <Heading title="Trending Movies" className="card-heading" />
        {trendingMovies.map((movie, index) => (
          <Image key={index} src={movie} className="movie-img" />
        ))}
      </div>
      <div className="movie-card">
        <Heading title="New Releases" className="card-heading" />
        {latestMovies.map((movie, index) => (
          <Image key={index} src={movie} className="movie-img" />
        ))}
      </div>
    </div>
  );
}

export default Movies;
