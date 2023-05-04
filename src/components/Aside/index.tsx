import {
  Home,
  Search,
  Library,
  Plus,
  Radio,
  DownloadIcon,
  Heart,
} from "lucide-react";

import Logo from "../../assets/logo.svg";

export function Aside() {
  return (
    <aside className="w-[18.75rem] bg-zinc-950">
      <img src={Logo} alt="" className="ml-7 mt-7" />
      <div className="px-2 mt-7">
        <a
          href="#"
          className="text-white flex px-6 py-3 hover:bg-zinc-800 rounded-md ease-in-out duration-300"
        >
          <Home size={24} />
          <p className="text-lg ml-6">Home</p>
        </a>
        <a
          href="#"
          className="text-white flex px-6 py-3 hover:bg-zinc-800 rounded-md ease-in-out duration-300"
        >
          <Search size={24} />
          <p className="text-lg ml-6">Search</p>
        </a>
        <a
          href="#"
          className="text-white flex px-6 py-3 hover:bg-zinc-800 rounded-md ease-in-out duration-300"
        >
          <Library size={24} />
          <p className="text-lg ml-6">Your Library</p>
        </a>
      </div>

      <div className="ml-7 mt-12 flex flex-col gap-6">
        <a href="" className="flex ">
          <Plus className="bg-white p-1 rounded-md" size={24} />

          <p className="text-lg text-white ml-6">Create Playlist</p>
        </a>
        <a href="" className="flex">
          <Heart
            className="text-lg bg-gradient-to-br from-indigo-800 via-violet-600 to-blue-200 text-white p-1 rounded-md"
            size={24}
          />

          <p className="text-lg text-white ml-6">Liked Songs</p>
        </a>
        <a href="" className="flex">
          <Radio
            className="bg-green-900 text-green-600 p-1 rounded-md"
            size={24}
          />

          <p className="text-lg text-white ml-6">Your Episodes</p>
        </a>
      </div>

      <div className="ml-7 mt-10 text-white flex flex-col gap-4">
        <a href="#" className="text-lg">
          FAV
        </a>
        <a href="#" className="text-lg">
          Daily Mix 1
        </a>
        <a href="#" className="text-lg">
          Discover Weekly
        </a>
        <a href="#" className="text-lg">
          Malayalam
        </a>
        <a href="#" className="text-lg">
          Dance / Electronix Mix
        </a>
        <a href="#" className="text-lg">
          EDM / Popular
        </a>
      </div>

      <a href="" className="flex ml-7 mt-16">
        <DownloadIcon className="text-white " size={24} />

        <p className="text-lg text-white ml-6">Install App</p>
      </a>
    </aside>
  );
}
