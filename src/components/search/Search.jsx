import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import "./Search.css";

export let value="";

export default function Search({ hidebutton = false }) {
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("You Clicked Search Button", input);
    value=input;
    navigate("/search");
  };

  return (
    <>
     
        <form className="search">
          <div className="searchInput">
            <SearchIcon className="InputSearchIcon" />
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <MicIcon />
          </div>
          {!hidebutton ? (
            <div className="searchButton">
              <Button
                variant="outlined"
                type="submit"
                onClick={(e) => search(e)}
              >
                Google Search
              </Button>
              <Button variant="outlined">I Am Feeling Lucky Today</Button>
            </div>
          ) : (
            <div className="searchButtonhide">
              <Button
                variant="outlined"
                type="submit"
                onClick={(e) => search(e)}
              >
                Google Search
              </Button>
              <Button variant="outlined">I Am Feeling Lucky Today</Button>
              
            </div>
          )}
        </form>
      

       
    
    </>
  );
}
