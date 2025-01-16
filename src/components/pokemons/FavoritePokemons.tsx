"use client";
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

import { PokemonGrid } from '@/pokemons/components'



export const FavoritePokemons = () => {

    const pokemons = useAppSelector(state => state.pokemons.favorites);
    const favPokemonsArr = Object.values(pokemons);
    // const favPokemonsArr = Object.entries(pokemons).map(([, pokemons]) => {
    //     return pokemons;
    // });
    const [tempPokemon, setPokemons] = useState(favPokemonsArr);

    useEffect(() => {
        setPokemons(tempPokemon);
    }, [tempPokemon])

    return (
        <div className="flex flex-col items-center justify-normal  w-full h-full overflow-scroll py-5">

            <h1 className="text-3xl font-bold mb-5">Pokemons <small className="text-blue-500">Favorites</small></h1>

            {
                !tempPokemon.length
                    ? <NoFavorites />
                    : <PokemonGrid pokemons={favPokemonsArr} />
            }

        </div>
    );
}


export const NoFavorites = () => {

    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    );
}
