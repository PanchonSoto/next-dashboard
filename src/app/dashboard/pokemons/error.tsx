"use client"; // Error boundaries must be Client Components

import { useEffect } from 'react'
import { IoBugOutline } from 'react-icons/io5';

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center pb-44">

            <IoBugOutline size={100} className="text-gray-500" />

            <div className="flex flex-col items-center justify-center">
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">500</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Server Error</p>
                <p className="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops, something went wrong on our servers.</p>
            </div>
        </div>
    )
}
