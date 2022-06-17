import React from 'react'

function Playlists() {

    const playlist: string[] = ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 4"];

  return (
    <div className="my-4 h-full overflow-auto flex flex-col gap-4 text-gray-200/75 text-sm px-2 lg:px-8">
      <ul className="font-light">
        {playlist.map((pl)=>{
            return (
                <li className="w-full items-center mb-3">
                    <span>{pl}</span>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Playlists