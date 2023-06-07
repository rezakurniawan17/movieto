import MoviesCarousel from "../UI/Carousel/MoviesCarousel";
import MoviesNav from "../UI/Nav/MoviesNav";

export default function UpcomingMovies({ movies }) {
  return (
    <div>
      <MoviesNav title={"Upcoming"} />
      <MoviesCarousel movies={movies} />
    </div>
  );
}
