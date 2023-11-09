import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./component.css";

const UserCard = ({ userData }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (userData.repos_url) {
      fetch(userData.repos_url)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
        })
        .catch((error) => {
          console.error("Error fetching repositories: ", error);
        });
    }
  }, [userData.repos_url]);
  console.log("User Repos: ", repos);

  return (
    <>
      <CSSTransition in={true} timeout={1000} classNames="usercard">
        <div className="usercard bg-slate-600 h-[500px] w-[90%] rounded-md flex">
          <img
            src={userData.avatar_url}
            alt="avatar_url"
            className="h-48 w-48 rounded-full m-4 bg-white"
          />
          {/* User Data */}
          <div className="flex-1 bg-slate-500 m-4 rounded-md">
            <h1 className="text-white text-3xl m-2">{userData.login}</h1>
            {/* Just a line */}
            <div className="border-solid h-[1px] w-85% bg-black rounded-full"></div>

            <div className="flex flex-row content-between m-4 gap-40">
              <div className="flex flex-col">
                <h3 className="text-xl">Followers</h3>
                <h1 className="text-2xl text-center">{userData.followers}</h1>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl">Following</h3>
                <h1 className="text-2xl text-center">{userData.following}</h1>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl">Repositories</h3>
                <h1 className="text-2xl text-center">
                  {userData.public_repos}
                </h1>
              </div>
            </div>

            <h2 className="text-white text-xl mx-2">Repositories:</h2>
            {/* Repos */}
            <div className="mx-6 my-2">
              {repos.slice(0, 3).map((repo) => (
                <div key={repo.id} className="mb-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 hover:text-blue-500"
                  >
                    {repo.name}
                  </a>
                  <a
                    href={repo.owner.html_url}
                    target="_blank"
                    className="mb-4 text-blue-400 hover:text-blue-500"
                  >
                    {repo.owner.repos_url}
                  </a>
                  <h6 className="text-sm">Description: {repo.description}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default UserCard;
