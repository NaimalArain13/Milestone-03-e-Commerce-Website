"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black top-0 z-10 sticky p-4 flex justify-between items-center shadow-2xl rounded-full">
      {/* Shopping Cart Icon */}
      <div className="flex-none w-14">
        <Link href="/cart">
          <FaShoppingCart className="text-amber-200 text-2xl hover:text-cyan-600" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex md:w-64 md:justify-end md:space-x-4">
        <Link
          href="/"
          className={`text-amber-200 text-lg ${
            pathname === "/" ? "text-cyan-500 bg-white px-1 rounded-full" : ""
          } hover:text-cyan-600`}
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={`text-amber-200 text-lg ${
            pathname === "/contact" ? "text-cyan-500 bg-white px-1 rounded-full" : ""
          } hover:text-cyan-600`}
        >
          Contact
        </Link>
        <Link
          href="/product"
          className={`text-amber-200 text-lg ${
            pathname === "/product" ? "text-cyan-500 bg-white px-1 rounded-full" : ""
          } hover:text-cyan-600`}
        >
          Shop
        </Link>
        <Link
          href="/about"
          className={`text-amber-200 text-lg ${
            pathname === "/about" ? "text-cyan-500 bg-white px-1 rounded-full" : ""
          } hover:text-cyan-600`}
        >
          About
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="toggle menu"
          className="text-amber-200 md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <MdMenuBook size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-zinc-950/90 flex justify-center text-center">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className={`text-amber-200 text-lg ${
                pathname === "/" ? "text-cyan-500" : ""
              } hover:text-cyan-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={`text-amber-200 text-lg ${
                pathname === "/contact" ? "text-cyan-500" : ""
              } hover:text-cyan-600 transition-colors`}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={`text-amber-200 text-lg ${
                pathname === "/about" ? "text-cyan-500" : ""
              } hover:text-cyan-600 transition-colors`}
            >
              About
            </Link>
            <Link
              href="/product"
              className={`text-amber-200 text-lg ${
                pathname === "/shop" ? "text-cyan-500" : ""
              } hover:text-cyan-600 transition-colors`}
            >
              Shop
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
