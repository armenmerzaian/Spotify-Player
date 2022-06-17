import React from "react";
import { HomeIcon, SearchIcon, CollectionIcon } from "@heroicons/react/solid";
import { PlusSmIcon, HeartIcon, BookmarkIcon } from "@heroicons/react/outline";

function SideMenu() {
  return (
    <div className="flex flex-col gap-4 text-gray-200/75 text-sm px-2 lg:px-8">
      <ul className="font-bold">
        <li className=" inline-flex w-full items-center gap-4 mb-2">
          <HomeIcon className="w-8" />
          <span>Home</span>
        </li>

        <li className=" inline-flex w-full items-center gap-4 mb-2">
          <SearchIcon className="w-8" />
          <span>Search</span>
        </li>

        <li className=" inline-flex w-full items-center gap-4">
          <CollectionIcon className="w-8" />
          <span>Your Library</span>
        </li>
      </ul>

      <ul className="">
        <li className="inline-flex w-full items-center gap-4 mb-2">
          <PlusSmIcon className="w-8 border-2 border-gray-200/75 rounded-lg" />
          <span className="">Create Playlist</span>
        </li>

        <li className="inline-flex w-full items-center gap-4 mb-2">
          <HeartIcon className="w-8" />
          <span className="">Liked Songs</span>
        </li>

        <li className="inline-flex w-full items-center gap-4">
          <BookmarkIcon className="w-8" />
          <span className="">Saved Episodes</span>
        </li>
      </ul>

      <hr className="border-b border-gray-200/25 w-full"/>

    </div>
  );
}

export default SideMenu;
