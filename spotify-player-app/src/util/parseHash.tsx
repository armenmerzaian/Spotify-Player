import User from "./userInterface";

export default function parseHash(str: string): User {
  const hash = new URLSearchParams(new URL(str).hash.substring(1));
  let user: User = {
    access_token: hash.get("access_token"),
    token_type: hash.get("token_type"),
    expires_in: hash.get("expires_in"),
  };
  return user;
}
