import { PokemonsResponse, SimplePokemonRes } from "@/pokemons/interfaces";
import { PokemonGrid } from "@/pokemons/components";




const getPokemons = async (limit=20, offset=0):Promise<SimplePokemonRes[]> => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const data:PokemonsResponse = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));

    const pokemons = data.results.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.url.split("/").slice(-2)[0],
    }));


    return pokemons;
};
export default async function PokemonsPage() {

    const pokemons = await getPokemons();

  return (
    <div className="flex flex-col items-center justify-normal  w-full h-full overflow-scroll py-5">

        <h1 className="text-3xl font-bold mb-5">Pokemons <small>Static</small></h1>

        <PokemonGrid pokemons={pokemons} />

    </div>
  );
}
