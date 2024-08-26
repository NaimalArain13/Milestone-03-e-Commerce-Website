"use client";
import { useEffect, useState } from "react";
import { ProductDetail } from "../_lib/data";
import Link from "next/link";
import ProductCard from "../components/productCard";
export default function ProductList(){
  const [product , setproduct] = useState<ProductDetail[]>([])
  useEffect(()=>{
    const ProductDetails = async()=>{

      const res = await fetch("/api")
      const data = await res.json()
      setproduct(data)
      console.log(data)  //check if the data is successfully fetched
      
    }
    ProductDetails()
  },[])
  return(
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3">
      {product.map((p)=>(
        
        <ProductCard key={p.id}
        id={p.id}
        title={p.title} 
        description={p.description} 
        image={p.image} 
        price={p.price} 
               
        />
      ))}
      {/* {product.map((p)=>(
       <Link href={`/product/${id}`}>
       <li key={p.id}>
          <p>{p.image}</p>
          <p>{p.title}</p>
          <p>{p.price}</p>
        </li></Link>
       
      ))} */}
    </div>
  )
}