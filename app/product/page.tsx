"use client";
import { useEffect, useState } from "react";
import { Books } from "../_lib/data";
import Link from "next/link";
import ProductCard from "../components/productCard";
export default function ProductList() {
  const [product, setproduct] = useState<Books[]>([]);
  useEffect(() => {
    const ProductDetails = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setproduct(data);
      console.log(data); //check if the data is successfully fetched
    };
    ProductDetails();
  }, []);
  return (
    <div>
      <section className="bg-bg py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Shop</h1>
      </section>
      <div className="grid grid-cols-2 bg-bg sm:grid-cols-3 sm:gap-y-4 md:grid-cols-4 md:gap-y-4">
        {product.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}
