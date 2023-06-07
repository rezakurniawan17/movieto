import MoviesCarousel from "../UI/Carousel/MoviesCarousel";
import MoviesNav from "../UI/Nav/MoviesNav";

export default function PopularMovies({ movies }) {
  return (
    <div>
      <MoviesNav title={"Popular Movies"} />
      <MoviesCarousel movies={movies} />
    </div>
  );
}
