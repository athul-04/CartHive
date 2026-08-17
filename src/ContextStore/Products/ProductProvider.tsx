import Products from "../../Datas/ProductData";
import { createContext,useState, type ReactNode } from "react";



type ProductType = {
  id: number;
  name: string;
  type: string;
};

type ProductsContextType = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
});


const ProductProvider=({children}:{children:ReactNode})=>{

    const [products,setProducts]=useState<ProductType[]>(Products);

    return(
            <ProductsContext.Provider value={{products,setProducts}}>
                {children}
            </ProductsContext.Provider>
    )
}


export {ProductProvider,ProductsContext};
