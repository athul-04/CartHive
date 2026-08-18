import { ResultCard } from "./ResultCard";
import { useContext } from "react";
import { ProductsContext } from "../../../ContextStore/Products/ProductProvider";


type ProductType = {
    name:string,
    description:string,
    imageUrl:string,
    id:number,
    type:string
};

const  ResultSection=()=>{
    const {updatedProductState}=useContext(ProductsContext);
    console.log(updatedProductState)
    const results = updatedProductState.map((product: ProductType) => {
        return <ResultCard key={product.name} name={product.name} description={product.description} imageUrl={product.imageUrl}/>
    })
    return (
        <>
            {results}
        </>
    )
}

export default ResultSection;