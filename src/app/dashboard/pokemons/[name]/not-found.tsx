import Link from "next/link";
import { IoSadOutline } from "react-icons/io5";

export default function NotFound() {
  return (
        <div className="w-full h-screen flex flex-col items-center justify-center pb-44">

            <IoSadOutline size={100} className="text-gray-500" />

            <div className="flex flex-col items-center justify-center">

                <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
                    404
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
                    Not Found
                </p>
                <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
                    Whoops, Pokemon not found <br />
                    View
                    <Link
                     className="text-blue-500 hover:underline ml-1"
                     href="/dashboard/pokemons">
                        Pokemon List.
                    </Link>
                </p>
            </div>
        </div>
  );
}
