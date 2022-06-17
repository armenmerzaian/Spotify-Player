import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import spotifyLogo from "../assets/Spotify_Icon_RGB_White.png";

export const BrandLogo = () => {
  return (
    <div
      id="sidebar-brand"
      className="w-full px-2 lg:px-4 py-6 flex justify-center items-center gap-3"
    >
          <LazyLoadImage
            alt={"spotify logo"}
            width={"50px"}
            src={spotifyLogo} // use normal <img> attributes as props
          />
      <h1 className="text-white hidden text-2xl font-bold lg:block">Spotify Player</h1>
    </div>
  );
};
