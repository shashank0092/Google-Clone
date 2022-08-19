import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import ResultPage from './pages/Resultpage/ResultPage';
import Search from './pages/Searchpage/Search';


const App=()=>{
  return(
    <>
      
       <Routes>
         
          <Route path="/" element={<Search/>} /> 
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
    
       
      
               
    </>
  )
}


export default App;