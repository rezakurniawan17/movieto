import PersonGrid from "../UI/Grid/PersonGrid";

export default function PopularPersons({ persons }) {
  return (
    <div>
      <span className="block mb-4 text-2xl font-bold text-white/80">
        Popular People
      </span>
      <PersonGrid persons={persons} />
    </div>
  );
}
