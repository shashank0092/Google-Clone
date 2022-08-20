import React from "react";
import Resultcard from "./Resultcard";
import ResultNavbar from "./ResultNavbar";


const ResultPage=()=>{

    
    return(
        <>
        <div className="min-w-fit" >
            
             <ResultNavbar/>
            <Resultcard/>
        </div>
            
        </>
    )
}

export default ResultPage;