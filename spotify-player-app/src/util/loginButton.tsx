import React from 'react'

export default function loginButton() : string {
  
    let client_id: string = "0fc2c9d87fa247ac8d255a1a041108a5";
    let response_type: string = "token";
    let redirect_uri: string = "http://localhost:3000"
    let scope: string = "user-read-private user-read-email user-read-recently-played playlist-read-collaborative";

    let url: URL = new URL("https://accounts.spotify.com/authorize");

        url.searchParams.append('client_id', client_id);
        url.searchParams.append('response_type', response_type);
        url.searchParams.append('redirect_uri', redirect_uri);
        url.searchParams.append('scope', scope);

    return url.toString();
}
