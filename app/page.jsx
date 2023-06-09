import PopularMovies from "@/components/Pages/PopularMovies";
import PopularPersons from "@/components/Pages/PopularPersons";
import TrendingPersons from "@/components/Pages/TrendingPersons";
import UpcomingMovies from "@/components/Pages/UpcomingMovies";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTViYTY1MDk5YTU3MmZiYWIzYTFhNGNhOGQzNTU0NCIsInN1YiI6IjYwOTlmYjQxOTNkYjkyMDAzZDE4OTE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIckxamttPSc6aXsaGSVOva_jwumAO5l-ubMh9BoIoo",
  },
};

async function getPersons(type) {
  const res = await fetch(
    `${
      type === "popular"
        ? "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"
        : "https://api.themoviedb.org/3/trending/person/day?language=en-US"
    }`,
    options
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  return res.json();
}
async function getMovies(list) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${list}?language=en-US&page=1`,
    options
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }
  return res.json();
}

export default async function page() {
  const popularMovies = await getMovies("popular");
  const upcomingMovies = await getMovies("upcoming");
  const trendingPersons = await getPersons("trending");
  const popularPersons = await getPersons("popular");
  return (
    <div className="flex flex-col gap-10 mt-4">
      <PopularMovies movies={popularMovies.results} />
      <UpcomingMovies movies={upcomingMovies.results} />
      <div className="flex flex-col gap-10 lg:gap-36 lg:flex-row">
        <div className="basis-1/2">
          <PopularPersons persons={popularPersons.results} />
        </div>
        <div className="basis-1/2">
          <TrendingPersons persons={trendingPersons.results} />
        </div>
      </div>
    </div>
  );
}
