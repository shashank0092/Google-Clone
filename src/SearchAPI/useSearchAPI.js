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
		            'X-RapidAPI-Key': 'be88ea1cf8msh70d26e62270510dp14610bjsn2014ca5670da',
		            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                }

            });
            const resultData=await search.json();
            // console.log('The Result IS',resultData);
            
            setData(resultData);
            
        }

        fetchSearch()
    },[term])
 return{
   data
 }
  
}

export default useSearchAPI;
