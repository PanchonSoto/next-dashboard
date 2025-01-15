import { PokemonsResponse, SimplePokemonRes } from "@/pokemons/interfaces";
import { PokemonGrid } from "@/pokemons/components";





export const metadata = {
    title: 'Pokemon favorite list',
    description: 'Pokemon list',
};


export default async function PokemonsPage() {



    return (
        <div className="flex flex-col items-center justify-normal  w-full h-full overflow-scroll py-5">

            <h1 className="text-3xl font-bold mb-5">Pokemons <small className="text-blue-500">Favorites</small></h1>

            <PokemonGrid pokemons={[]} />

        </div>
    );
}
