import Image from "next/image";
import { SimplePokemonRes } from "../interfaces";
import { PokemonCard } from "./PokemonCard";


interface Props {
    pokemons: SimplePokemonRes[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap justify-center">
            {pokemons.map((pokemon, index) => (

                <PokemonCard key={`${pokemon.id}`} pokemon={pokemon}/>
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
