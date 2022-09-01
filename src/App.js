import React from 'react';
import Home from './pages/Home/Home'
import Searchpages from './pages/Searchpage/Searchpage';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


export default function App(){


  return(
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Searchpages/>}/>
        </Routes>
       
      </Router>
      
    </>
  )
}