import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import counterReducer from '@/store/counter/counterSlice';
import pokemonReducer from '@/store/pokemons/pokemons';

import { localStorageMiddleware } from '@/store/middleware/localStorage';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
