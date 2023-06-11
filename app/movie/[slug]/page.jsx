import CreditCarousel from "@/components/UI/Carousel/CreditCarousel";
import Image from "next/image";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTViYTY1MDk5YTU3MmZiYWIzYTFhNGNhOGQzNTU0NCIsInN1YiI6IjYwOTlmYjQxOTNkYjkyMDAzZDE4OTE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIckxamttPSc6aXsaGSVOva_jwumAO5l-ubMh9BoIoo",
  },
};

async function getCreditMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );

  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  return res.json();
}

async function getDetailMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const id = params.slug.slice(0, 6);
  const detail = await getDetailMovie(id);
  const credit = await getCreditMovie(id);
  console.log(detail);
  return (
    <div className="relative py-6">
      {/* Movie Poster */}
      <div className="aspect-[4/6] lg:aspect-video w-full relative">
        <span className="block w-full lg:hidden">
          <Image
            loading="lazy"
            src={`${`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} `}
            alt={`${detail.title} - Image`}
            fill={true}
          />
        </span>
        <span className="hidden w-full lg:block">
          <Image
            loading="lazy"
            src={`${`https://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`} `}
            alt={`${detail.title} - Image`}
            fill={true}
          />
        </span>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        {/* Movie Information */}
        <div className="flex flex-col gap-2.5">
          {/* Movie - Rating */}
          <div className="inline-flex items-center gap-2">
            <span className="px-3 py-1.5 text-sm font-semibold text-black bg-yellow-500 rounded-full">
              <span className="mr-1">IMDB</span>{" "}
              {detail.vote_average.toFixed(2)}
            </span>
          </div>
          {/* Movie - Title */}
          <span className="text-3xl font-medium text-white">
            {detail.title}
          </span>
          {/* Movie - Genre */}
          <div className="inline-flex gap-2">
            {detail.genres.map((genre) => {
              return (
                <span
                  key={genre.id}
                  className="px-4 py-1 text-green-500 rounded-full border-[1px] border-green-500 text-xs bg-green-500/10"
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Prolog */}
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-medium text-white">Prolog</span>
          <span className="text-sm text-gray-400">{detail.overview}</span>
        </div>

        {/* Cast */}
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-medium text-white">Top Cast</span>
          <div className="">
            <CreditCarousel credit={credit} />
          </div>
        </div>
      </div>
    </div>
  );
}
