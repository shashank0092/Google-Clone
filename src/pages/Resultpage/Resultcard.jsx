import React from 'react';
import { useSelector } from 'react-redux';
import useSearchAPI from '../../SearchAPI/useSearchAPI';

const Resultcard=()=>{

    const term=useSelector((state)=>state.changeSearch);
    const data=useSearchAPI(term);
    


    
    return(
        <>
        <div className="bg-stone-50" >
           <div className="result_header mx-44 my-4" >
                <p className="text-slate-400" >About {data?.data?.total} results ({data?.data?.ts})sec</p>
            
            </div>

            <div className="result_card mx-44 my-4 " >
                
                {
                    
                    (data?.data?.results)?.map((answer,key)=>{
                        return(
                            
                            <div key={key} className="py-2">
                            
                            <p className="domain text-sm font-sans tracking-wide  my-2 " >{answer?.cite?.domain}</p>
                            <a href={answer?.link} className="title text-blue-500 text-xl font-mono my-2 hover:cursor-pointer hover:underline tracking-tighter">{answer?.title}</a>
                            <p className="description w-1/2 text-lg my-1 text-stone-500 font-serif" >{answer?.description}</p>
                            <ul className="w-1/2">
                                {
                                    (answer?.additional_links).map((links,key)=>{
                                        return(
                                            <>
                                             
                                            <li className="inline-block mx-1 text-sm font-sans">
                                                <a href={links.href} className="alink text-blue-500 hover:underline  " key={key} >{links.text}  </a>
                                                
                                            </li>
                                           
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            </div>

                        )
                    })
                }
            </div> 
            </div>
        </>
    )
}

export default Resultcard;