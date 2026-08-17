
import { Heart, ShoppingCart } from "lucide-react";
export interface NavIconProps{
    property:string
}


const NavIcon=(props:NavIconProps)=>{
    const {property}=props;
    return(
        <>
            <div className="flex gap-1 items-center basis-1/4">
                {property==="wishlist"?<Heart size={20} />:<ShoppingCart size={20} /> }
                <span>{property}</span>
            </div>
        
        </>
    )
}

export default NavIcon;