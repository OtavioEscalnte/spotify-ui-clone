import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import userImg from "../../assets/img/user.png";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex justify-between items-center relative">
      <div className="flex gap-5">
        <button className="flex items-center justify-center  p-2 bg-black bg-opacity-30 rounded-full">
          <ChevronLeft
            className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
            size={24}
          />
        </button>

        <button className="flex items-center justify-center  p-2  bg-black bg-opacity-30 rounded-full">
          <ChevronRight
            className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
            size={24}
          />
        </button>
      </div>

      <button
        type="button"
        className="flex items-center bg-black py-1 pl-1 pr-2 rounded-full hover:scale-105 ease-in-out duration-300"
        onClick={handleOpen}
      >
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" />
          <span className="text-white text-xl">Angel</span>
        </div>
        <div className="ml-4">
          <ChevronDown
            className={
              isOpen
                ? "text-white -rotate-180 ease-in-out duration-300"
                : "text-white -rotate-0 ease-in-out duration-300"
            }
            size={24}
          />
        </div>
      </button>

      {isOpen ? (
        <div className="flex flex-col  p-5 w-60 bg-zinc-800 gap-5 rounded absolute right-0 top-16 shadow-xl">
          <button className="flex justify-between text-white hover:scale-105 ease-out duration-300">
            Account <ExternalLink className="text-white" size={24} />
          </button>
          <button className="flex justify-between text-white hover:scale-105 ease-out duration-300">
            Profile
          </button>
          <button className="flex justify-between text-white hover:scale-105 ease-out duration-300">
            Log out
          </button>
        </div>
      ) : null}
    </header>
  );
}
