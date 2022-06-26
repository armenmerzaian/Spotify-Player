import React, { ReactNode } from "react";
import { HomeIcon, SearchIcon, CollectionIcon } from "@heroicons/react/solid";
import { PlusSmIcon, HeartIcon, BookmarkIcon } from "@heroicons/react/outline";

function SideMenu() {
  return (
    <div className="flex flex-col gap-4 text-gray-200/75 text-sm px-2 lg:px-8">
      <ul className="font-bold">
        <MenuItem label="Home">
          <HomeIcon className="w-8" />
        </MenuItem>
        <MenuItem label="Search">
          <SearchIcon className="w-8" />
        </MenuItem>
        <MenuItem label="Search">
          <CollectionIcon className="w-8" />
        </MenuItem>
      </ul>

      <ul className="">
        <MenuItem label="Create Playlist">
          <PlusSmIcon className="w-8 border-2 border-gray-200/75 rounded-lg" />
        </MenuItem>

        <MenuItem label="Create Playlist">
          <HeartIcon className="w-8" />
        </MenuItem>

        <MenuItem label="Create Playlist">
          <BookmarkIcon className="w-8" />
        </MenuItem>
      </ul>

      <hr className="border-b border-gray-200/25 w-full" />
    </div>
  );
}

function MenuItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="w-full mb-2">
      <div className="inline-flex items-center gap-4 hover:text-gray-200 hover:curosr-pointer">
        {children}
        <span>{label}</span>
      </div>
    </li>
  );
}

export default SideMenu;
