import React from 'react'
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';

import './Home.css'
const Home = () => {
  return (
    <div className="home" >
       

        <div className="homeheader">

            <div className="headerLeft">
                <Link to="/about" >About</Link>
                <Link to="/store" >Store</Link>
            </div>

            <div className="headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon/>
                <Avatar/>
                {/* icon */}
                {/* avtar */}
            </div>
        </div>

        <div className="body">

        </div>

    </div>
  )
}


export default Home;