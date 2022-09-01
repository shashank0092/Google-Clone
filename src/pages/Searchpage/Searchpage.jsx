import React from 'react';
import useGooglesearch from '../../useGooglesearch';
import { value } from '../../components/search/Search';


export default function Searchpage(){
    
    const data=useGooglesearch(value);
    
    return(
        <>
            {console.log(data)}
        <div className="searchPage" >
            <div className="searchPageHeader" >
                <h1>{value}</h1>
            </div>
            <div className="searchPageResults" >

            </div>
        </div>
        </>
    )
}