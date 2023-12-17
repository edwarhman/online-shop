import { useState } from "preact/hooks";

interface ProductGallery {
    images: string[];
}

function ProductGallery({
    images
}: ProductGallery) {

    const [current, setCurrent] = useState(0)

    return (<div class='grid'>
        <div>
            <img
                src={images[current]} 
                alt="selected product image" 
                class='w-full h-80 img object-cover rounded-xl'
            />
        </div>
        <ul class='flex gap-4 mt-4'>
            {
                images.map((image, idx)=> (
                <li class={`${idx === current ? 'border-gray-500' : ''} rounded-xl border`}>
                    <a onClick={()=> {
                        setCurrent(idx)
                    }} class='cursor-pointer'>
                        <img class='object-cover h-20 aspect-square rounded-xl' src={image} />    
                    </a>
                </li>
            ))}
        </ul>
    </div>)
}

export default ProductGallery