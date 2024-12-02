import Description from "./Description";
const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  baseExp,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
      <small className="text-gray-500">#{id}</small>
      <img src={image} alt={name} className="w-32 h-32 object-contain" />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{name.toUpperCase()}</h3>
        <small className="text-sm text-gray-700">Type: {type}</small>
        <Description
          baseExp={baseExp}
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
        />
      </div>
    </div>
  );
};

export default PokemonThumbnail;
