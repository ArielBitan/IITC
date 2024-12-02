import { useOutletContext } from "react-router-dom";

const Moves = () => {
  const pokemon = useOutletContext();

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Moves</h2>
      <ul>
        {pokemon.moves.slice(0, 10).map((move, index) => (
          <li key={index} className="mt-2">
            {move.name}
          </li>
        ))}
      </ul>
      <div className="mt-4"> and more...</div>
    </div>
  );
};

export default Moves;
