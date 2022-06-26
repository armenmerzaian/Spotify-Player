import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { PlaylistItem } from '../components/Playlists';

function usePlaylists() {
  const {isLoading, isError, data, error} = useQuery('playlists', () => {
    return axios.get("https://jsonplaceholder.typicode.com/albums");
  })
  
  if (isLoading){
    return <PlaylistItem title="loading..."/>
  }

  if (isError && error){
    console.error(error); 
    return <PlaylistItem title="Can't find Playlists :(" />
  }

  return (
    data?.data
  )
}

export default usePlaylists