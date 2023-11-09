import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CSSTransition } from "react-transition-group";
import "./component.css";

const SearchBar = ({ callback }) => {
  const [data, setData] = useState("");
  const [isEnter, setIsEnter] = useState(false);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim() !== "") {
      setIsEnter(true);
      callback(data);
    }
  };
  return (
    <>
      <CSSTransition in={isEnter} timeout={500} classNames="searchbar">
        <form
          onSubmit={handleSubmit}
          className="searchbar w-[90%] bg-slate-600 flex items-center content-center mx-auto rounded-full my-6"
        >
          <input
            type="text"
            value={data}
            onChange={handleChange}
            className="w-[80%] ml-2 rounded-s-md  placeholder:text-black pl-4"
            placeholder="Enter Username"
          />
          <button className="bg-blue-600 text-white h-[90%] w-[18%] rounded-e-md my-3 hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faGithub} className="mx-2" />
            Search
          </button>
        </form>
      </CSSTransition>
    </>
  );
};

export default SearchBar;
