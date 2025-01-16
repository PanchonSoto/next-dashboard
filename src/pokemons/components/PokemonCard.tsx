"use client";
import Link from "next/link"
import { useDispatch } from "react-redux";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import { useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

import { SimplePokemonRes } from "../interfaces"


interface Props {
    pokemon: SimplePokemonRes
}

export const PokemonCard = ({ pokemon, }: Props) => {

    const { name, id } = pokemon;

    const dispatch = useDispatch();
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);


    const onToggleFav = () => {
        dispatch(toggleFavorite(pokemon));
    }

    return (
        <div className="right-0 my-2 w-60 mx-1">
            <div className="bg-white rounded overflow-hidden shadow-lg w-[100%]">
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
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-pointer">
                            View Pokemon
                        </Link>
                    </div>
                </div>

                <div
                    onClick={onToggleFav}
                    className="border-b flex items-center"
                >
                    <div className=" w-full p-4 hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                        <div className="text-red-500">
                            {
                                isFavorite ? (<IoHeart />) : (<IoHeartOutline />)
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Remove from favorites" : "Add to favorites"}
                            </p>
                            {/* <p className="text-xs text-gray-500">View your campaigns</p> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}
