import React, { ReactNode } from "react";
import usePlaylists from "../fetch/usePlaylists";

export default function Playlists() {
  const playlist: string[] = [
    "Playlist 1",
    "Playlist 2",
    "Playlist 3",
    "Playlist 4",
  ];

  const albums = usePlaylists();
  console.log(albums);

  return (
    <div className="my-4 h-fit overflow-auto flex flex-col gap-4 text-gray-200/75 text-sm px-2 lg:px-8">
      <ul className="font-light">
        {playlist.map((pl) => {
          return <PlaylistItem title={pl} />;
        })}
      </ul>
    </div>
  );
}

export function PlaylistItem({ title }: { title: string }) {
  return (
    <li className="w-full items-center mb-3">
      <span className="hover:text-gray-200">{title}</span>
    </li>
  );
}
