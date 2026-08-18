import {useState,useEffect,useRef} from "react";
const images=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMPEqI1ybMxZiHNjL3oZDJjLR8vqZBgUOmCzmv6DEotLG2Y-GvFM17xio&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07djYjGnJZkfFYFT9f9QPMsdwawx3UrpI0LkTfOmZMhXxmsky5hthsict&s=10",
        "https://clt.qa/store/img/index/apple_banner_big.jpg",
        
]
const Slider=()=>{
    
    
    const [imageIndex,setImageIndex]=useState<number>(0)

    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setImageIndex(prev => (prev + 1) % images.length);
                setFade(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <div className="w-full h-[140px] overflow-hidden">
                <img
                    className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        fade ? "opacity-100" : "opacity-0"
                    }`}
                    src={images[imageIndex]}/>

            </div>
        </>
    )
}

export default Slider;