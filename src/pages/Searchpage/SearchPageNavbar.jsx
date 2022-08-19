import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ImageIcon from '@mui/icons-material/Image';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const SearchPageNavbar=()=>{
    return(
        <>
            <div className=" flex  mx-28 my-3 " >
                <div className="navbar_left flex grow" >
                        <div className="flex justify-center self-center " >
                            <HomeIcon/>
                            <p className='hover:underline hover:cursor-pointer' >Home</p>
                        </div>
                        <div className="about mx-4 flex justify-center self-center" >
                            <InfoIcon/>
                            <p className='hover:underline hover:cursor-pointer' >About</p>
                        </div>
                </div>
                <div className="navbar_right flex" >

                    <div className="email mx-4 flex justify-center self-center " >
                        <EmailIcon/> 
                        <p className='hover:underline hover:cursor-pointer' >Gmail</p>
                    </div>
                       
                       <div className='images mx-4 flex justify-center self-center' >
                        <ImageIcon/> 
                        <p className='hover:underline hover:cursor-pointer' > Images</p>
                       </div>

                       <div className='menu mx-4 flex justify-center self-center' >
                        <MenuIcon/>
                        <p className='hover:cursor-pointer ' >Menu</p>
                       </div>
                        
                        <div className="id mx-4 flex justify-center self-center" >
                         <Avatar sx={{height:35,width:35}} className="hover:cursor-pointer" >S</Avatar>
                        </div>
                        

                </div>
            </div>

        </>
    )
}


export default SearchPageNavbar;