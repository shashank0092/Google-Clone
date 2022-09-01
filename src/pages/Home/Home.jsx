import React from 'react'
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../../components/search/Search'

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
              
            </div>
        </div>

        <div className="homebody">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        </div>

        <div className="homeInputContainer" >
            <Search />
        </div>

    </div>
  )
}


export default Home;