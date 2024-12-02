import { useOutletContext } from "react-router-dom";

const Abilities = () => {
  const pokemon = useOutletContext();

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="mt-2">
            {ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;
