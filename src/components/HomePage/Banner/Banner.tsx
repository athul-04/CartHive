import { useState,useEffect,useRef } from "react";
import { X } from "lucide-react";
const Banner=()=>{
    const [isHidden,setIsHidden]=useState<true|false>(false)
    const intervalId=useRef<undefined|number>(undefined)
    useEffect(()=>{
        return ()=>clearTimeout(intervalId.current)
    },[])

    const setHiddenStateTimer=()=>{
        setIsHidden(!isHidden)
        clearTimeout(intervalId.current)
        intervalId.current=setTimeout(()=>{
            setIsHidden(false)
        },10000)
    }


    return <>
        <div className={`text-white h-[2rem] flex transition-all duration-500 ease-in-out items-center bg-brand-primary px-4 ${isHidden?"h-0 -translate-y-full opacity-0":"h-[2rem] opacity-100"} `}>
            <p className="flex-1 text-center">⛱️ Summer Sale is Live! Upto 50% OFF on thousands of products. </p>
            <p className="cursor-pointer" onClick={()=>setHiddenStateTimer()}><X size={20}/></p>
        </div>
    </>
}


export default Banner;