import  { useEffect, useState } from 'react';





const useSearchAPI=(term)=>{

    const [data,setData]=useState(null);
  

    useEffect(()=>{
        const fetchSearch=async()=>{
            const search=await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${term}`,{
                method: 'GET',
                headers: {
                    'X-User-Agent': 'desktop',
		            'X-Proxy-Location': 'EU',
		            'X-RapidAPI-Key': `${String(process.env.REACT_APP_SEARCH_API_KEY)}`,
		            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                }

            });
            const resultData=await search.json();
            
            
            setData(resultData);
            
        }

        fetchSearch()
    },[term])
 return{
   data
 }
  
}

export default useSearchAPI;
