import { useEffect, useState } from "react";
const localCache ={};
export const useFetch = (url) => {
    const [state, setstate] = useState({
        data:null,
        isLoading:true,
        hasError:false,
        errorMessage:null
    });
        const getFetch=async()=>{
            if (localCache[url]!=null){
                console.log("usando cache");
                setstate({
                    data: localCache[url],
                    isLoading:false,
                    hasError:false,
                    errorMessage:null
                })
                return;
            }
            console.log("usando intelne")
          setLoadingState();
            const response =   await fetch(url);
            if(!response.ok){
                setstate({
                data:null,
                isLoading:false,
                hasError:true,
                errorMessage:{
                    cdode: response.status,
                    message: response.message
                }
                });
                return;
            }
            const data = await response.json();
            
           localCache[url]=data;
            setstate({
                data: data,
                isLoading:false,
                hasError:false,
                errorMessage:null
            })

        
        }
        useEffect(() => {
            getFetch();

        }, [url]) 

        const setLoadingState=()=>{

            setstate({
                data:null,
        isLoading:true,
        hasError:false,
        errorMessage:null
    
            })
        }
        return{
            data:state.data,
            isLoading:state.isLoading,
            hasError:state.hasError
         }
}
