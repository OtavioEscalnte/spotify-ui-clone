import { Heart, Play } from "lucide-react";

import thumb1 from "../../assets/img/thumb1.png";
import thumb2 from "../../assets/img/thumb2.png";
import thumb3 from "../../assets/img/thumb3.png";
import thumb4 from "../../assets/img/thumb4.png";
import thumblg1 from "../../assets/img/thumblg1.png";
import thumblg2 from "../../assets/img/thumblg2.png";
import thumblg3 from "../../assets/img/thumblg3.png";
import thumblg4 from "../../assets/img/thumblg4.png";
import thumblg5 from "../../assets/img/thumblg5.png";
import thumblg6 from "../../assets/img/thumblg6.png";

export function Home() {
  return (
    <>
      <div className="mt-12">
        <p className="text-white text-4xl">Good morning</p>
        <div className="grid grid-cols-4 mt-4 gap-7">
          <a
            href="#"
            className="group flex items-center overflow-hidden bg-zinc-800 w-[22.625rem] rounded  hover:bg-zinc-700 "
          >
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-800 via-violet-600 to-blue-200 text-white">
              <Heart size={30} />
            </div>

            <div className=" flex flex-1 items-center justify-between px-5">
              <span className="text-white text-xl">Liked Songs</span>

              <div className="p-2  bg-green-400 rounded-full invisible group-hover:visible">
                <Play size={24} />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group flex items-center overflow-hidden bg-zinc-800 w-[22.625rem] rounded  hover:bg-zinc-700 "
          >
            <img src={thumb1} alt="" className=" w-24 h-24" />

            <div className=" flex flex-1 items-center justify-between px-5">
              <span className="text-white text-xl">Neffex Playlist</span>

              <div className="p-2  bg-green-400 rounded-full invisible group-hover:visible">
                <Play size={24} />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group flex items-center overflow-hidden bg-zinc-800 w-[22.625rem] rounded  hover:bg-zinc-700 "
          >
            <img src={thumb2} alt="" className=" w-24 h-24" />

            <div className=" flex flex-1 items-center justify-between px-5">
              <span className="text-white text-xl">K/ DA</span>

              <div className="p-2  bg-green-400 rounded-full invisible group-hover:visible">
                <Play size={24} />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group flex items-center overflow-hidden bg-zinc-800 w-[22.625rem] rounded  hover:bg-zinc-700 "
          >
            <img src={thumb3} alt="" className=" w-24 h-24" />

            <div className=" flex flex-1 items-center justify-between px-5">
              <span className="text-white text-xl">Liked Songs</span>

              <div className="p-2  bg-green-400 rounded-full invisible group-hover:visible">
                <Play size={24} />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group flex items-center justify-start overflow-hidden bg-zinc-800 w-[22.625rem] rounded  hover:bg-zinc-700 "
          >
            <img src={thumb4} alt="" className=" w-24 h-24" />

            <div className=" flex flex-1 items-center justify-between px-5">
              <span className="text-white text-xl text-left">
                Dance /<br /> Electronic Mix
              </span>

              <div className="p-2  bg-green-400 rounded-full invisible group-hover:visible">
                <Play size={24} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <p className="text-white text-3xl">Shows you might like</p>
          <a
            href="#"
            className="text-white text-lg text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
          >
            SEE ALL
          </a>
        </div>
        <div className="grid grid-cols-6 gap-7 mt-9">
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg1} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg2} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg3} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg4} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg5} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
          <a href="#" className="p-5 bg-zinc-900 hover:bg-zinc-800">
            <img src={thumblg6} alt="" />
            <div className="mt-6">
              <p className="text-white text-xl">Weekly Motivatio...</p>
              <p className="text-zinc-400">Ben Ina Scott</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
