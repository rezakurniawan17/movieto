import Image from "next/image";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTViYTY1MDk5YTU3MmZiYWIzYTFhNGNhOGQzNTU0NCIsInN1YiI6IjYwOTlmYjQxOTNkYjkyMDAzZDE4OTE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIckxamttPSc6aXsaGSVOva_jwumAO5l-ubMh9BoIoo",
  },
};

async function getDetailPeople(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    options
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  return res.json();
}

async function getMovieCredit(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
    options
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const peopleId = params.slug.match(/\d/g).join("");
  const detailPeople = await getDetailPeople(peopleId);
  const movieCredit = await getMovieCredit(detailPeople.id);
  console.log(movieCredit);
  return (
    <div>
      <div className="flex flex-col justify-center w-full gap-4 overflow-hidden lg:gap-20 lg:p-10 lg:flex-row">
        <div className="w-full basis-1/3">
          <div className="relative aspect-[4/6] ">
            <Image
              loading="lazy"
              src={`${`https://image.tmdb.org/t/p/h632/${detailPeople.profile_path}`} `}
              alt={`${detailPeople.name} - Image`}
              fill={true}
              // width={300}
              // height={500}
            />
          </div>
        </div>
        <div className="relative w-full flex-flex-col basis-1/3">
          <span className="text-white">{detailPeople.name}</span>
          <span className="text-sm text-gray-400">
            {detailPeople.biography}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movieCredit.cast?.map((credit) => {
          return (
            <div key={credit.id}>
              <Image
                loading="lazy"
                src={`${`https://image.tmdb.org/t/p/w500/${credit.poster_path}`} `}
                alt={`${credit.title} - Image`}
                width={200}
                height={400}
              />
              <span>{credit.title}</span>
              <span>{credit.chacarter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
