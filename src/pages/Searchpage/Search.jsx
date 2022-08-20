import React from "react";
import Inputbar from "../../components/Inputbar";
import SearchPagebox from "./SearchPagebox";
import SearchPageNavbar from './SearchPageNavbar';
import {dotenv} from 'dotenv';
import { DotenvConfigOptions } from "dotenv";


const Search=()=>{

      
    return(
        <>
        <>

        <div className="min-w-fit" >
          <SearchPageNavbar/>
          <SearchPagebox/>
          <Inputbar button={true}/>
        </div>
            
         </>

        
            
        </>
    )
}


export default Search;