import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons, setNextPage, setPageNum } from "../store/pokemonSlice";
import PokemonThumbnail from "../components/PokemonThumbnail";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { allPokemons, nextPage, pageNum } = useSelector(
    (state) => state.pokemon
  );

  const getFirstPage = async () => {
    dispatch(
      setNextPage({ nextPage: "https://pokeapi.co/api/v2/pokemon?limit=20" })
    );
    dispatch(setPageNum({ pageNum: 1 }));
  };

  const getPreviousPage = async () => {
    if (pageNum <= 1) {
      return;
    }
    try {
      const res = await fetch(nextPage);
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();

      dispatch(setNextPage({ nextPage: data.previous }));
      dispatch(setPageNum({ pageNum: pageNum - 1 }));
    } catch (error) {
      console.error("Failed to fetch next page:", error);
    }
  };

  const getNextPage = async () => {
    try {
      const res = await fetch(nextPage);
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();

      dispatch(setNextPage({ nextPage: data.next }));
      dispatch(setPageNum({ pageNum: pageNum + 1 }));
    } catch (error) {
      console.error("Failed to fetch next page:", error);
    }
  };

  const getAllPokemons = async () => {
    const res = await fetch(nextPage);
    const data = await res.json();

    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          baseExp: data.base_experience,
          types: data.types.map((type) => type.type.name),
          height: data.height,
          weight: data.weight,
          stats: data.stats.map((stat) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          })),
          abilities: data.abilities.map((ability) => ({
            name: ability.ability.name,
          })),
          moves: data.moves.map((move) => ({
            name: move.move.name,
          })),
        };
      })
    );

    dispatch(setPokemons({ pokemons: detailedPokemons }));
  };

  useEffect(() => {
    getAllPokemons();
  }, [pageNum]);

  return (
    <div className="mt-4 px-4">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allPokemons.map((pokemon) => (
            <Link to={`/${pokemon.name}`} key={pokemon.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-slate-300">
                <PokemonThumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.types.join(", ")}
                  baseExp={pokemon.baseExp}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  stat1={pokemon.stats[0]?.name}
                  stat2={pokemon.stats[1]?.name}
                  stat3={pokemon.stats[2]?.name}
                  stat4={pokemon.stats[3]?.name}
                  stat5={pokemon.stats[4]?.name}
                  stat6={pokemon.stats[5]?.name}
                  bs1={pokemon.stats[0]?.base_stat}
                  bs2={pokemon.stats[1]?.base_stat}
                  bs3={pokemon.stats[2]?.base_stat}
                  bs4={pokemon.stats[3]?.base_stat}
                  bs5={pokemon.stats[4]?.base_stat}
                  bs6={pokemon.stats[5]?.base_stat}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center flex gap-6 justify-center">
          <button
            onClick={getFirstPage}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition mb-4"
          >
            &lt; &lt;
          </button>
          <button
            onClick={getPreviousPage}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition mb-4"
          >
            &lt;
          </button>
          <span className="text-3xl font-sans">{pageNum}</span>
          <button
            onClick={getNextPage}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition mb-4"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
