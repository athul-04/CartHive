import React from "react";
import Banner from "./Banner/Banner";
import { useContext,useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import { ProductProvider } from "../../ContextStore/Products/ProductProvider";
import CategoryFacet from "./FilterSection/CategoryFacet";
import Support from "./FilterSection/Support";
import { ProductsContext } from "../../ContextStore/Products/ProductProvider";
import Slider from "./Slider/Slider";
import { ResultCard } from "./ResultLayout/ResultCard";
import ResultSection from "./ResultLayout/ResultSection";
const HomePage=()=>{
    

    return (
        <ProductProvider>
            <div className="h-screen bg-[#F7F5F5]">
                <Banner/>
                <NavBar/>
                <div className="flex w-full justify-center  mt-5">
                    <div className="flex-col basis-1/4 ">
                        <CategoryFacet/>
                        <Support/>
                    </div>
                    <div className="flex flex-col basis-3/4 self-start mr-5 w-full">
                        <Slider/>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            <ResultSection/>
                        </div>
                    </div>
                </div>
            </div>
            
        </ProductProvider>
    )
}

export default HomePage;