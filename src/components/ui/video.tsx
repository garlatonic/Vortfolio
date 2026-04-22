"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TYPOGRAPHY } from "@/constants/typography";
import { twMerge } from "tailwind-merge";

export default function Video({
  src,
  thumbnail,
  type = "video/mp4",
}: {
  src: string;
  thumbnail?: string;
  type?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      void video.play();
      return;
    }

    video.pause();
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full group cursor-pointer border aspect-video">
      <video
        ref={videoRef}
        className="aspect-video object-cover w-full"
        playsInline
        muted
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {thumbnail && (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={thumbnail}
                alt="Video Thumbnail"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
            </div>
          )}
          <div className="relative text-center text-white inner">
            <div
              className="size-10 lg:size-15 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 backdrop-blur-sm mx-auto mb-4"
              onClick={handlePlay}
            >
              <PlayIcon className="size-5 lg:size-6" />
              <span className="sr-only">재생</span>
            </div>
            <h2 className={twMerge(TYPOGRAPHY.video.title, "mb-1")}>
              시연 영상
            </h2>
            <p className={TYPOGRAPHY.video.description}>
              프로젝트의 주요 기능과 인터랙션을 영상으로 확인해보세요.
            </p>
          </div>
        </div>
      )}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity bg-black/50 backdrop-blur-xs  text-white">
          <div
            className="size-10 lg:size-15 rounded-full border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 backdrop-blur-sm mx-auto"
            onClick={handlePlay}
          >
            <PauseIcon className="size-5 lg:size-6" />
            <span className="sr-only">일시정지</span>
          </div>
        </div>
      )}
    </div>
  );
}
