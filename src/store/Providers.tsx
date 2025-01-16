"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";
import { setFavoritePokemons } from "@/store/pokemons/pokemons";



interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {


    useEffect(() => {
        const getFavorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
        console.log(getFavorites);
        store.dispatch(setFavoritePokemons(getFavorites.favorites));
    }, [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
