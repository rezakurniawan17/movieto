import PopularMovies from "@/components/Pages/PopularMovies";
import UpcomingMovies from "@/components/Pages/UpcomingMovies";

async function getMovies(list) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTViYTY1MDk5YTU3MmZiYWIzYTFhNGNhOGQzNTU0NCIsInN1YiI6IjYwOTlmYjQxOTNkYjkyMDAzZDE4OTE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIckxamttPSc6aXsaGSVOva_jwumAO5l-ubMh9BoIoo",
    },
  };

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

  console.log(popularMovies.resuls);
  return (
    <div className="flex flex-col mt-4 gap-10">
      <PopularMovies movies={popularMovies.results} />
      <UpcomingMovies movies={upcomingMovies.results} />
    </div>
  );
}
