import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button'
import { useDispatch} from "react-redux";
import { changeInput } from "../redux/actions/ChangeInput";
import { useNavigate } from "react-router-dom";


const Inputbar=({button})=>{

    const [searchValue,setSearchValue]=useState("");
    const dispatch=useDispatch();
    const navigation=useNavigate();
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchValue===""){
          alert('Please enter a valid search')
            
        }
        else{
            dispatch(changeInput(searchValue))
        
        navigation('/result');
        }
        
    }
    return(
        <>
        <form >
            <div className="box-1 flex justify-center " >
                <div className="input_bar  inline-flex w-1/2 border-2 py-3 rounded-3xl min-w-max ">   
                    <SearchIcon className="mx-2"  onClick={(e)=>handleSubmit(e)} type="submit"  />
                    <input type="text" className="grow input_box focus:outline-none" placeholder='Search Google Or Type Url' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
                    <MicIcon className="mx-2" />
                </div>
            </div>
           

            {
                button?(
                    <div className="buttons flex justify-center my-8" >
                    <Button variant="outline" className="bg-[#f8f8f8]  text-[#5f6368] border  border-white hover:shadow-sm hover:bg-[#f8f8f8] hover:border hover:border-[#c6c6c6] hover:text-[#222] hover:bg-gradient-to-t from-[#f8f8f8] to-[#f1f1f1]" sx={{textTransform:'none'}} onClick={(e)=>handleSubmit(e)} type="submit"  >
                    Google Search
                    </Button>
                    <Button variant="outline" className="bg-[#f8f8f8] text-[#5f6368] border border-white  hover:shadow-sm hover:bg-[#f8f8f8] hover:border hover:border-[#c6c6c6] hover:text-[#222] hover:bg-gradient-to-t from-[#f8f8f8] to-[#f1f1f1]" sx={{textTransform:'none'}} >
                        I Am Feeling Lucky
                    </Button>
                </div>
                ):(
                    <div className="buttons flex justify-center my-8 d-none" >
                    <Button variant="outline" className="bg-[#f8f8f8]  text-[#5f6368] border  border-white hover:shadow-sm hover:bg-[#f8f8f8] hover:border hover:border-[#c6c6c6] hover:text-[#222] hover:bg-gradient-to-t from-[#f8f8f8] to-[#f1f1f1]" sx={{textTransform:'none'}}  onClick={(e)=>handleSubmit(e)} type="submit" >
                    Google Search
                    </Button>
                    <Button variant="outline" className="bg-[#f8f8f8] text-[#5f6368] border border-white  hover:shadow-sm hover:bg-[#f8f8f8] hover:border hover:border-[#c6c6c6] hover:text-[#222] hover:bg-gradient-to-t from-[#f8f8f8] to-[#f1f1f1]" sx={{textTransform:'none'}} >
                        I Am Feeling Lucky
                    </Button>
                </div>
                )
            }
           
        </form>
           
        </>
    )
}


export default Inputbar;