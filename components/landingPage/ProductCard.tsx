import Image from "next/image"
import {type ImageProps} from "next/image"

interface productProp{
    image:ImageProps["src"],
    title?:string,
    description?:string,
    amount?:number,
    alt:string,
    detailsClassName?:string
}

const ProductCard:React.FC<productProp> = ({image,title, description, amount, alt ,detailsClassName}) => {
  return (
    <div className=" w-[170px] lg:w-92.5 flex flex-col shrink-0 object-cover ">
        <Image className="lg:h-[376px] w-[170px] h-[180px] lg:w-[366px] " src={image} alt={alt} />
        <h5 className={`${detailsClassName}`}>{title}</h5>
        <div className={`flex gap-1 justify-between ${detailsClassName}`}>
         <p className="text-sm">{description}</p>
        <p className="text-sm">₦{amount}</p>
        </div>
    </div>
  )
}

export default ProductCard