import React from "react";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import { ProductProvider } from "../../ContextStore/Products/ProductProvider";
import CategoryFacet from "./FilterSection/CategoryFacet";
import Support from "./FilterSection/Support";
const HomePage=()=>{
    return (
        <ProductProvider>
            <div className="h-screen bg-[#F7F5F5]">
                <Banner/>
                <NavBar/>
                <div className="flex w-full justify-center items-center mt-5">
                    <div className="flex-col basis-1/4 ">
                        <CategoryFacet/>
                        <Support/>
                    </div>
                    <div className="basis-3/4 ">
                        
                    </div>
                </div>
            </div>
            
        </ProductProvider>
    )
}

export default HomePage;