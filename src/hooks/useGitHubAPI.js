import { useEffect, useState } from "react";

function useGitHubAPI(username) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [username]);

  return data;
}

export default useGitHubAPI;
