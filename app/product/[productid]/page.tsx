"use client";
import { useEffect, useState } from "react"
import SingleProductCard from "@/app/components/singleProductCard";
import {Books} from "../../_lib/data"
import NotFound from "@/app/not-found";

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
    <div><NotFound children={undefined} /></div>
  )
}
return(
  <div>
    <SingleProductCard product={matchId as Cart}    
    />
  </div>
)

}
 
  