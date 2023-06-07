import Link from "next/link";
export default function MoviesNav({ title }) {
  return (
    <div className="mb-1 w-full flex justify-between items-center">
      <span className="text-lg lg:text-2xl font-semibold text-white/80">
        {title}
      </span>
      <Link href={`/movies/popular`}>
        <span className="text-white/60 hover:text-white transform duration-300">
          See more
        </span>
      </Link>
    </div>
  );
}
