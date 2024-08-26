"use client";
import { useEffect, useState } from "react"
import {ProductDetail} from "../../_lib/data"
export default function ProductId({ params }: { params: { productid: string } }) {
  const [productId , setProductId] = useState<ProductDetail[] | null>(null)
useEffect(()=>{
  const ProductId = async ()=>{
    const res = await fetch("http://localhost:3000/api")
    const data = await res.json()
    setProductId(data)
  }
  ProductId()
},[])
const singleProductId= parseInt(params.productid , 10)

const matchId = productId?.find((p)=>{return parseInt(p.id)===singleProductId})

if(!matchId){
  return(
    <div>{params.productid}</div>
  )
}
return(
  <div>
    <p>Product Name: {matchId.title}</p>
    <p>Product Description: {matchId.description}</p>
    <p> Porduct Image: {matchId.image}</p>
    <p>Product Category: {matchId.category}</p>
    <p>Product Price: {matchId.price}</p>
  </div>
)

}
 
  