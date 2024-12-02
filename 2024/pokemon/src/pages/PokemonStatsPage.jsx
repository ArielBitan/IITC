import { useOutletContext } from "react-router-dom";

const Stats = () => {
  const pokemon = useOutletContext();

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {pokemon.stats.map((stat) => (
          <div key={stat.name} className="flex justify-between">
            <span className="font-semibold">{stat.name}</span>
            <span>{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
