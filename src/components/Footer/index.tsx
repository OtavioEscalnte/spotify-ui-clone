import React, { useRef, useState } from "react";
import {
  Heart,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  Laptop,
  Volume2,
  MoveDiagonal,
  Pause,
} from "lucide-react";

import thumbnail from "../../assets/img/img1.png";

export function Footer() {
  const [volume, setVolume] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const duration = 162;

  const intervalIdRef = useRef<number>();
  const progressRef = useRef<number>(0);

  function handlePlay() {
    if (!playing) {
      setPlaying(true);
      intervalIdRef.current = window.setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1 / duration;
          if (newProgress >= 1) {
            window.clearInterval(intervalIdRef.current);
            setPlaying(false);
            setProgress(0);
            return 0;
          } else {
            return newProgress;
          }
        });
        progressRef.current = progress;
      }, 1000);
    } else {
      window.clearInterval(intervalIdRef.current);
      setPlaying(false);
      setProgress(progressRef.current);
    }
  }

  function handlePause() {
    clearInterval(intervalIdRef.current);
    setPlaying(false);
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const elapsedTime = Math.floor(progress * duration);

  function handleChangeVolume(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.right - rect.left;
    const percent = clickX / width;
    setVolume(percent);
  }

  return (
    <footer className="bg-zinc-900 h-28 px-7 py-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={thumbnail} alt="" />
        <div>
          <p className="text-white text-lg">Dreaming On</p>
          <p className="text-zinc-400 text-base">NEFFEX</p>
        </div>
        <Heart className="text-green-400" size={24} />
      </div>

      <div className="flex flex-col ml-8">
        <div className="flex items-center justify-center gap-6">
          <Shuffle
            size={24}
            className="text-white opacity-50 hover:opacity-100 ease-in-out duration-300"
          />
          <SkipBack
            size={24}
            className="text-white opacity-50 hover:opacity-100 ease-in-out duration-300"
          />

          <button
            type="button"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 ease-in-out duration-300"
            onClick={playing ? handlePause : handlePlay}
          >
            {playing ? (
              <Pause size={24} className=" text-zinc-950 " />
            ) : (
              <Play size={24} className=" text-zinc-950 " />
            )}
          </button>
          <SkipForward
            size={24}
            className="text-white opacity-50 hover:opacity-100 ease-in-out duration-300"
          />
          <Repeat
            size={24}
            className="text-white opacity-50 hover:opacity-100 ease-in-out duration-300"
          />
        </div>

        <div className="flex items-center mt-4 gap-2 ">
          <span className="text-zinc-400 text-sm">
            {formatTime(elapsedTime)}
          </span>
          <div className="bg-zinc-400 bg-opacity-25 h-1 w-[39.563rem] rounded">
            <div
              className="bg-zinc-400 bg-opacity-100 h-1 rounded"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
          <span className="text-zinc-400 text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex gap-3 ">
        <button type="button">
          <Mic2
            className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
            size={24}
          />
        </button>
        <button type="button">
          <ListMusic
            className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
            size={24}
          />
        </button>
        <button type="button">
          <Laptop className="text-green-400" size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button type="button">
            <Volume2
              className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
              size={24}
            />
          </button>
          <div
            onClick={handleChangeVolume}
            className="bg-zinc-400 bg-opacity-25 h-1 w-28 rounded cursor-pointer overflow-hidden "
          >
            <div
              className="bg-zinc-400 bg-opacity-100 h-1 rounded transition-all duration-500 ease-in-out"
              style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
        <button type="button">
          <MoveDiagonal
            className="text-white text-opacity-25 hover:text-white opacity-100 ease-in-out duration-300"
            size={24}
          />
        </button>
      </div>
    </footer>
  );
}
