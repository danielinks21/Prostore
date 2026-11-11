'use client'
import { useState } from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

const ProductImages = ({images } : {images:string[]}) => {

    const [current, setCurrent] = useState(0);
    const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

    const selectImage = (index: number) => {
        setSlideDirection(index > current ? "right" : "left");
        setCurrent(index);
    };

    return ( 
<div className = 'space-y-4'>
<Image key={current} src = {images[current]} alt = "product image" width={1000} height={1000} className={cn("min-h-[300px] object-cover object-center animate-in fade-in duration-450 ease-out", slideDirection === "right" ? "slide-in-from-right-4" : "slide-in-from-left-4")}/>
<div className="flex">
    {images.map((image, index) => (
        <div key= {image} onClick = {() => selectImage(index) } className = { cn('border mr-2 cursor-pointer hover:border-orange-600', current === index && 'border-orange-500')}>
            <Image src ={image} alt='image' width = {100} height = {100} /> 
            
        </div>
    ))}
</div>
</div>

     );
}
 
export default ProductImages;