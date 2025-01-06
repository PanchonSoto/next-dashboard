import Link from "next/link"
import { SimplePokemonRes } from "../interfaces"
import Image from "next/image";
import { IoHeart } from "react-icons/io5";


interface Props {
    pokemon: SimplePokemonRes
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { name, id } = pokemon;

    return (
        <div className="mx-auto right-0 my-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">

                    <Image
                        className="m-auto"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                        priority={false}
                    />

                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
                    <div className="mt-5">
                        <Link
                         href={`/dashboard/pokemon/${id}`}
                         className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-pointer">
                            View Pokemon
                        </Link>
                    </div>
                </div>
                <div className="border-b flex items-center">
                    <Link href="/dashboard/main" className=" w-full p-4 hover:bg-gray-100 flex items-center justify-center">
                        <div className="text-red-500">
                            <IoHeart />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Add to favorites
                            </p>
                            {/* <p className="text-xs text-gray-500">View your campaigns</p> */}
                        </div>
                    </Link>

                </div>

            </div>
        </div>

    )
}
