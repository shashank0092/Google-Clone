import React from "react";
import Inputbar from "../../components/Inputbar";
import SearchPagebox from "./SearchPagebox";
import SearchPageNavbar from './SearchPageNavbar';



const Search=()=>{
    return(
        <>
        <div className=" min-w-max">

        
            <SearchPageNavbar/>
          
            <SearchPagebox/>
            <Inputbar button={true}/>
         </div>

        
            
        </>
    )
}


export default Search;