import { PokemonCard } from "./PokemonCard";

import { SimplePokemonRes } from "@/pokemons/interfaces";
// import { SimplePokemonRes } from "../interfaces";



interface Props {
    pokemons: SimplePokemonRes[];
}


// const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemonRes[]> => {

//     const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//     const data: PokemonsResponse = await fetch(url)
//         .then((res) => res.json())
//         .catch((error) => console.log(error));

//     const pokemons = data.results.map((pokemon) => ({
//         name: pokemon.name,
//         id: pokemon.url.split("/").slice(-2)[0],
//     }));


//     return pokemons;
// };

export const PokemonGrid = ({ pokemons }: Props) => {

    // const [pokemons, setPokemons] = useState<SimplePokemonRes[]>([]);

    // useEffect(() => {
    //     const fetchPokemons = async () => {

    //         const fetchedPokemons = await getPokemons();

    //         setPokemons(fetchedPokemons);
    //     }

    //     fetchPokemons();
    // }, []);

    return (
        <div className="flex flex-wrap justify-evenly">
            {pokemons.map((pokemon) => (

                <PokemonCard key={`${pokemon.id}`} pokemon={pokemon} />
                // <div key={index} className="p-2">
                //     <div className="flex flex-col items-center justify-center w-32 h-32 bg-gray-200 rounded-lg">
                //         <Image
                //             className="w-24 h-24"
                //             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                //             alt={pokemon.name}
                //             width={100}
                //             height={100}
                //         />
                //         <p className="text-sm font-bold">{pokemon.name}</p>
                //     </div>
                // </div>
            ))}
        </div>
    );
}
