import React from "react";
import {type Dispatch} from "react"
import {useState} from "react";
import {FACET_ACTION} from "../../../utils/FacetReducer";
import { type Action } from "./CategoryFacet";



type FacetValueProps={
    value:string;
    count:number,
    dispatch:Dispatch<Action>
}

const FacetValue=(props:FacetValueProps)=>{
    const {value,count,dispatch}=props
    const facetVal:string=`${value} (${count})`;
    const [checked,setChecked]=useState<true|false>(false);


    const handleFacetClick=(val:string)=>{
        
        if(!checked==false){
            dispatch({type:FACET_ACTION.DESELECT,payload:{value:val}})
        }
        else{
            dispatch({type:FACET_ACTION.SELECT,payload:{value:val}})
        }
        setChecked(!checked)
    }
    
    return (
        <>
         <div
  className={`
    flex h-10 items-center justify-center
    cursor-pointer my-2 w-[13rem] mx-auto pl-2 rounded-sm
    transition-all duration-300 ease-in   shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            
    ${checked
      ? "bg-brand-background border-l-3 border-b-3 border-brand-primary shadow-sm"
      : "hover:bg-slate-50 border-l-1 border-b-1"
    }
  `}
>    
            <div onClick={()=>handleFacetClick(value)} className="w-full">
                <p>{facetVal}</p>
            </div>
         </div>


        </>
    )
}

export default FacetValue;