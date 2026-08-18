import React from "react"
import { useContext,useState,useReducer,useEffect } from "react"
import { ProductsContext } from "../../../ContextStore/Products/ProductProvider"
import FacetValue from "./FacetValue";
import {FacetReducer,FACET_ACTION} from "../../../utils/FacetReducer"

type ProductType = {
    name:string,
    description:string,
    imageUrl:string,
    id:number,
    type:string
};



type Action = { type: FACET_ACTION.CLEAR_ALL } | { type: FACET_ACTION.DESELECT, payload: {value:string} }| { type: FACET_ACTION.SELECT, payload: {value:string} };



const setFacetMap=(products:ProductType[])=>{
    const facetMap=new Map();
    products.forEach((product:ProductType)=>{
        const productType=product.type;
        facetMap.set(productType,(facetMap.get(productType)||0)+1)
    })

    const facets=Array.from(facetMap,([value,count])=>({
        value,count
    }));
    return facets;
}



const CategoryFacet=()=>{
    const {products,updatedProductState,setUpdatedProductState}:{products:ProductType[],updatedProductState:ProductType[],setUpdatedProductState:React.Dispatch<React.SetStateAction<ProductType[]>>}=useContext(ProductsContext);
    const facets=setFacetMap(products);

    const [FacetState,dispatch]=useReducer(FacetReducer,[])

    

    useEffect(()=>{
        if(FacetState.length>0){
            const filteredProducts=products.filter((product:ProductType)=>FacetState.includes(product.type))
            setUpdatedProductState(filteredProducts)
        }
        else{
            setUpdatedProductState(products)

        }   
    },[FacetState])

    // console.log(updatedProductState)

    const facetComponent=facets.map((facet)=>{
        return <FacetValue key={facet.value} value={facet.value} count={facet.count} dispatch={dispatch} />
    })

    return (
        <>
            <div className="text-center pb-2">
                <p className="text-lg font-semibold">Category Facet</p>
            </div>
            <div className="px-10 ml-2 ">
                <div className="border-2 rounded-lg w-[18rem] felx felx-col py-4 ">
                    <div className="my-4">{facetComponent}</div>
                </div>
            </div>
        </>
    )
}

export default CategoryFacet;
export {type Action};