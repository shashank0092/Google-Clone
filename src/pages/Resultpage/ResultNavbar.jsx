import React from 'react';
import Inputbar from '../../components/Inputbar';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
const ResultNavbar=()=>{
   
    return(
        <>
        <div className="bg-stone-50 " >
            <div className="nav_bar flex items-center  " >
                
                <div className="nav_image ml-4 w-32  mt-2 mx-4   " >
                    <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google_image" className='box-border w-[90%]'/>
                    </Link>
                    
                  
                </div>

                <div id="boi" className='my-4  '  >
                    <Inputbar   />
                </div>

                <div className="flex flex-flex-column mx-30">
                    <div className="mx-2">
                        <SettingsIcon sx={{height:25,width:25}} className="hover:cursor-pointer" />
                    </div>

                    <div className="mx-2" >
                        <MenuIcon className="hover:cursor-pointer"/>
                    </div>

                    <div className="mx-2" >
                        <Avatar sx={{height:35,width:35}} className="hover:cursor-pointer" >S</Avatar>
                    </div>
                </div>
            </div>
            <div className='other flex  mx-44 my-4  '>
               <div className='flex mx-2' >    
                    <SearchIcon sx={{height:20,width:20}}  className="mt-1" />
                    <p className='text-md hover:underline hover:cursor-pointer' >All</p>
               </div>
               <div className='flex mx-2' >    
                    <BookIcon sx={{height:20,width:20}}  className="mt-1"/>
                    <p className='text-md hover:underline hover:cursor-pointer' >Books</p>
               </div>
               <div className='flex mx-2' >    
                    <NewspaperIcon sx={{height:20,width:20}}  className="mt-1" />
                    <p className='text-md hover:underline hover:cursor-pointer' >News</p>
               </div>
               <div className='flex mx-2' >    
                    <VideoLibraryIcon  sx={{height:20,width:20}} className="mt-1"/>
                    <p className='text-md hover:underline hover:cursor-pointer' >Video</p>
               </div>
               <div className='flex mx-2 ' >    
                    <ImageIcon  sx={{height:20,width:20}} className="mt-1" />
                    <p  className='text-md hover:underline hover:cursor-pointer' >Image</p>
               </div>
               <div className='flex  mx-2 flex-grow-1 ' >    
                    <MoreVertIcon  sx={{height:20,width:20}} className="mt-1" />
                    <p className='text-md hover:underline hover:cursor-pointer' >More</p>
               </div>
              
             

            </div>
            <hr />
        </div>
            

            
            
        </>
    )
}

export default ResultNavbar;