import React, { useState } from "react";
import { Error, UserCard, SearchBar } from "./components";
import useGitHubAPI from "./hooks/useGitHubAPI";

function App() {
  const [username, setUsername] = useState("");
  const [searched, setSearched] = useState(false);

  const userData = useGitHubAPI(searched ? username : null);

  const setData = (username) => {
    setUsername(username);
    setSearched(true);
  };

  return (
    <>
      <div className="flex items-center content-center flex-col">
        <SearchBar callback={setData} />
        {searched &&
          (userData?.message ? (
            <Error message={userData.message}></Error>
          ) : (
            <UserCard userData={userData}></UserCard>
          ))}
      </div>
    </>
  );
}

export default App;
