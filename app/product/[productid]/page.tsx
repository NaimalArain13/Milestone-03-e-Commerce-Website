"use client";
import { useEffect, useState } from "react"
import SingleProductCard from "@/app/components/singleProductCard";
import {Books} from "@/app/_lib/data"

interface Cart extends Books {
  quantity: number;  // Make quantity optional
}
export default function ProductId({ params }: { params: { productid: string } }) {
  const [productId , setProductId] = useState<Cart[] | null>(null)
useEffect(()=>{
  const ProductId = async ()=>{
    const res = await fetch("/api")
    const data = await res.json()
    setProductId(data)
  }
  ProductId()
},[])
const singleProductId= parseInt(params.productid , 10)

const matchId = productId?.find((p)=>{return p.id===singleProductId})

if (matchId && !matchId.quantity) {
  matchId.quantity = 1; // Set default quantity
}
if(!matchId){
  return(
    <div className="min-h-screen flex justify-center items-center bg-blue-800/10 text-4xl md:text-5xl">
      <h2 className="hover:shadow-2xl bg-black/50 rounded-full px-3 p-1">Product Not Found </h2>
      </div>
  )
}
return(
  <div>
    <SingleProductCard product={matchId as Cart}    
    />
  </div>
)

}
 
  