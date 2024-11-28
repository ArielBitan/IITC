import PokemonType from "./PokemonType.jsx";
const Card = (props) => {
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  let liStyle =
    "bg-gray-600 p-2 rounded-md text-slate-50 opacity-90 hover:opacity-100 hover:-translate-y-2";

  const spanStyle = "px-2 py-0.5 rounded-full opacity-90 hover:opacity-100";

  return (
    <>
      <li className={liStyle}>
        <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
        <div className="flex items-center justify-evenly gap-2">
          {props.types.map((element, index) => (
            <PokemonType
              element={element}
              key={index}
              className={spanStyle}
              style={{ backgroundColor: colors[element] }}
            />
          ))}
          <img src={props.sprite} alt={props.name} />
        </div>
      </li>
    </>
  );
};

export default Card;
