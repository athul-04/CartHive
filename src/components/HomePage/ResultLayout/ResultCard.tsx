
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart } from "lucide-react"
import { useState } from "react"

export function ResultCard({name,description,imageUrl}) {

    const[wishlisted,setWishlisted]=useState<true|false>(false)

    const wishlistHandler=()=>setWishlisted(!wishlisted);

  return (
    <Card className="relative mx-auto w-60 h-[18rem] max-w-sm pt-0 shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            hover:-translate-y-1">
      <div className="absolute inset-0 z-30 aspect-video " />
      <img
        src={imageUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover  "
      />
      <CardHeader>
        <CardAction>
            {/* {wishlisted?<div onClick={wishlistHandler} className="text-lg text-start">♥️</div>:<Heart size={20} color="#000000" strokeWidth={1.25} onClick={wishlistHandler} absoluteStrokeWidth />} */}
            <Heart
                size={20}
                onClick={wishlistHandler}
                className={`
                    cursor-pointer
                    transition-all
                    duration-300
                    ${wishlisted
                    ? "fill-pink-500 text-pink-500 scale-125"
                    : "text-black scale-100"}
                `}
                />
        </CardAction>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
