"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import OrderDone from "../components/orderDone";
import { useState } from "react";
export default function Cart() {
  const {
    cart,
    removeOneFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    totalPrice,
  } = useCart();
  const [showOrderDoneMessage , setShowOrderDoneMessage] = useState<boolean>(false)
  const handleOrderDone = ()=>{
    setShowOrderDoneMessage(true)
    clearCart()
  }

  return (
    <div className="bg-bg min-h-screen py-16">
  <section className="text-center mb-4">
    <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
  </section>
  {cart.length === 0 ? (
    <div className="flex justify-center items-center flex-col mt-10">
      <p className="text-xl text-gray-600">Your cart is empty</p>
      <Link href="/product">
        <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
          Continue Shopping
        </button>
      </Link>
    </div>
  ) : (
    <ul className="space-y-4 px-4">
      {cart.map((item) => (
        <li key={item.id} className="bg-white rounded-lg shadow p-4 flex ">
          <Image src={item.image} width={400} height={400} alt={item.title}  className="mt-2 w-20 h-20 rounded-md object-cover"/>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-pink-500">Price: ${item.price}</p>
            <div className="flex items-center mt-3">
              <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded-l-lg">-</button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded-r-lg">+</button>
              <button onClick={() => removeOneFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
  <div className="px-4 mt-6">
    <h3 className="text-lg font-semibold">Amount Price: ${totalPrice.toFixed(2)}</h3>
    <button onClick={handleOrderDone}
    disabled={cart.length === 0}
    className={`mt-4 w-full py-3 rounded-full text-white transition ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-stone-500 hover:bg-stone-600'}`}>Order Now</button>
  
  {showOrderDoneMessage && (
            <OrderDone 
            message="Your Order has been placed and It will be on your doorstep shortly"
            onClose={()=>{setShowOrderDoneMessage(false)}}/>
          )}
  </div>
</div>
    
  );
}


