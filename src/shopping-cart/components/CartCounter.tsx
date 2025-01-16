"use client";
import { useAppSelector, useAppDispatch } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import React, { useEffect } from "react";



interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {

    const data = await fetch('/api/counter').then(res => res.json());

    return data;

}

export const CartCounter = ({ }: Props) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();


    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [dispatch, value]);


    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(initCounterState(count)))
            .catch(err => { throw new Error(err) });
    }, [dispatch]);


    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex flex-row space-x-2">
                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]">
                    +1
                </button>

                <button
                    onClick={() => dispatch(substractOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]">
                    -1
                </button>
            </div>
        </>
    );
};
