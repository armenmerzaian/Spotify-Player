
export default function authLink() {
  const client_id: string = "0fc2c9d87fa247ac8d255a1a041108a5";
  const response_type: string = "token";
  const redirect_uri: string = "http://localhost:3000/login";
  const scope: string =
    "user-read-email user-read-private app-remote-control playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private user-read-recently-played user-read-playback-position user-top-read user-follow-modify user-follow-read user-modify-playback-state user-read-playback-state user-read-currently-playing ugc-image-upload";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=" + response_type;
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return url;
}
