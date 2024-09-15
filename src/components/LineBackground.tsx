import React from "react";

export default function LineBackground() {
  return (
    <div className="relative w-full h-[834px] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1728 834"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.56">
          {[...Array(13)].map((_, index) => {
            const y = index * 64 + 1;
            return (
              <path
                key={index}
                d={`M1728 ${833 - y}C1728 ${833 - y} 1341.17 ${665 - y} 864 ${
                  665 - y
                }C386.826 ${665 - y} 0 ${833 - y} 0 ${833 - y}`}
                stroke={`url(#gradient-${index})`}
              />
            );
          })}
        </g>
        <defs>
          {[...Array(13)].map((_, index) => (
            <linearGradient
              key={index}
              id={`gradient-${index}`}
              x1="864"
              y1={833 - index * 64}
              x2="864"
              y2={665 - index * 64}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#070707" />
              <stop offset="1" stopColor="#070707" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}
