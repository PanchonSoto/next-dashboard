import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemonRes } from '@/pokemons/interfaces';


interface FavoritesPokemon {
    // [key: string]: SimplePokemonRes,
    favorites: { [key: string]: SimplePokemonRes }
}



// const getInitialState = (): FavoritesPokemon => {

//     const getFavorites: FavoritesPokemon = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");

//     return getFavorites;
// }
const initialState: FavoritesPokemon = {

    favorites: {
        // ...getInitialState().favorites,
        // "1": { id: "1", "name": "bulbasaur" }
    }
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemonRes }>) {
            state.favorites = action.payload;
        },

        toggleFavorite(state, action: PayloadAction<SimplePokemonRes>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state.favorites[id]) {
                delete state.favorites[id];
                return;
            }

            state.favorites[id] = pokemon;
        },
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
