import { useEffect, useState } from "react";
import { BrowserHistory, createBrowserHistory } from "history";

function parseParams(str: string): Object{
  let pieces: string[] = str.split("&");
  let data: string[] | any = {};
  let i: number;
  let parts: string[];
  for (i = 0; i < pieces.length; i++) {
      parts = pieces[i].split("=");
      if (parts.length < 2) {
          parts.push("");
      }
      data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}

function Home() {

  let [access_token, setAccess_Token] = useState<string>();
  let [token_type, setToken_Type] = useState<string>();
  let [expires_in, setExpires_In] = useState<string>();
  let [state, setState] = useState<string>();

  let history: BrowserHistory = createBrowserHistory({window});
  let locHash: string = history.location.hash;
  let hashParams: Object = parseParams(locHash.substring(1));
  let entries = Object.entries(hashParams);
  console.log(entries);
  
 
  useEffect(() => {
    let accessToken = entries[0][1];
    let tokenType = entries[1][1];
    let expiresIn = entries[2][1];

    setAccess_Token(accessToken);
    setToken_Type(tokenType);
    setExpires_In(expiresIn);  
    
    history.push('/');
  }, [history])


  return (
    <div>
     {access_token}
    </div>
  )
}

export default Home