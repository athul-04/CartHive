import React from "react"
import { useContext } from "react"
import { ProductsContext } from "../../../ContextStore/Products/ProductProvider"

type ProductType = {
  id: number;
  name: string;
  type: string;
};

type FacetValueProps={
    value:string;
    count:number
}


const CategoryFacet=()=>{
    const {products}=useContext(ProductsContext);
    const facetMap=new Map();

    products.forEach((product:ProductType)=>{
        const productType=product.type;
        facetMap.set(productType,(facetMap.get(productType)||0)+1)
    })

    const facets=Array.from(facetMap,([value,count])=>({
        value,count
    }));

    console.log(facets)

    const facetComponent=facets.map((facet:FacetValueProps)=>{
        const facetVal:string=`${facet.value}-->${facet.count}`
        return <li key={facet.value}>{facetVal}</li>
    })

    return (
        <>
            <ul>{facetComponent}</ul>
        </>
    )
}

export default CategoryFacet;