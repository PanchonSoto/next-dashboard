import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "@/components";


const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline fontSize={32} />,
    title: "Dashboard",
    subTitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator fontSize={32} />,
    title: "Counter",
    subTitle: "Counter State",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball fontSize={32} />,
    title: "Pokemons",
    subTitle: "Pokemon List",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline fontSize={32} />,
    title: "Favorites",
    subTitle: "Pokemon Favorite List",
  }
];

export const Sidebar = () => {

  return (
    <div id="menu"
      style={{ width: "350px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">

      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="Avatar"
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Panshibe
          </span>
        </a>
      </div>

      <div id="nav" className="w-full">

        {
          menuItems.map((item, index) => (
            <SidebarMenuItem key={index} {...item} />
          ))
        }

      </div>
    </div>
  );
};
