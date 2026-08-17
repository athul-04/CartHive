import React from "react";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import { ProductProvider } from "../../ContextStore/Products/ProductProvider";
import CategoryFacet from "./FilterSection/CategoryFacet";
const HomePage=()=>{
    return (
        <ProductProvider>
            <div className="h-screen bg-[#F7F5F5]">
                <Banner/>
                <NavBar/>
                <CategoryFacet/>
            </div>
            
        </ProductProvider>
    )
}

export default HomePage;