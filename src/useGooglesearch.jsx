import React from 'react';
import {useState,useEffect} from 'react';
import myApi from './api';

const CONTEXT_KEY="14146d2431fc18e5f";

export default function Usegooglesearch(term){
    const [data,setData]=useState("");
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
 
    headers.append('Origin','http://localhost:3000');

    
    useEffect(()=>{
        const fetchData=async()=>{
            const mainresponse = await fetch(`https://www.googleapis.com/customesearch/v1?key=${myApi}&cx=${CONTEXT_KEY}&q=${term}`,{
                method: 'GET',
                headers:{
                    
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials:'include'
            })

            const data=await mainresponse;
            console.log('The Main Data Is->',data)
        }
        fetchData();
    },[term])

    return(
        {data}
    )
}