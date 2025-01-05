"use client";
import React, { useState } from "react";


export const CartCounter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex flex-row space-x-2">
                <button
                    onClick={() => setCount(count + 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]">
                    +1
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]">
                    -1
                </button>
            </div>
        </>
    );
};
