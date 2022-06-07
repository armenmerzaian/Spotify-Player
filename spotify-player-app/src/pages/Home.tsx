import { useEffect, useState } from "react";
import { BrowserHistory, createBrowserHistory } from "history";

function Home() {

  let [token, setToken] = useState<string>();

  let history: BrowserHistory = createBrowserHistory({window});
  let location = history.location.hash;

  useEffect(() => {
    setToken(location);
    history.push('/');
  }, [])


  return (
    <div>
     {token}
    </div>
  )
}

export default Home