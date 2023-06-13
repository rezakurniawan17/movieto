import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
export default function PersonGrid({ persons }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {persons?.slice(0, 10).map((person) => {
        return (
          <div key={person.id} className="flex items-center justify-between">
            <Image
              loading="lazy"
              className="shadow rounded-xl"
              src={`https://image.tmdb.org/t/p/w342/${person.profile_path}`}
              alt={`${person.name} - Poster`}
              width={70}
              height={100}
            />
            <span className="ml-10 duration-300 transform text-white/80 hover:text-white/100">
              <Link href={`/people/${person.id}-${slugify(person.name)}`}>
                {person.name}
              </Link>
            </span>
            <span className="px-4 py-2 ml-auto text-green-500 rounded-full border-[1px] border-green-500 text-xs bg-green-500/10">
              {Math.round(person.popularity)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
