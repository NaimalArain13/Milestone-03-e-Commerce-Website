import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4  md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Location 1 */}
          <div>
            <h3 className="text-amber-500 text-lg font-bold mb-2">Tech Store (HQ)</h3>
            <p>
              123 Hero Tower
              <br />
              Hyderabad, CA 12234
              <br />
              Pakistan
            </p>
            <Link href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
              Get directions
            </Link>
          </div>


          {/* Location 3 */}
          <div>
            <h3 className="text-cyan-500 text-lg font-bold mb-2">Tech Store (Lahore)</h3>
            <p>
              45 Tech Boulevard
              <br />
              Gulberg, 10117
              <br />
              Pakistan
            </p>
            <Link href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
              Get directions
            </Link>
          </div>
          {/* External Link */}
          <div className="flex flex-col">
            <h3 className="text-blue-700 text-lg font-bold mb-2">External Links</h3>
            
            <Link href="//milestone-02-personal-portfolio-web.vercel.app/" className="text-gray-400 hover:text-white mt-2 inline-block">
              My Portfolio
            </Link>
            <Link href="//blog-platform-by-na.vercel.app/" className="text-gray-400 hover:text-white mt-2 inline-block">
              My Blog Post Platform
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/product" className="text-gray-400 hover:text-white">
              Shop Now
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              contact
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              about
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              home
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <p>© 2024 Tech Store. Your go-to place for tech gadgets</p>
          </div>

          <div className="flex items-center space-x-3 ">
            <p>Part of</p>
            <div className="w-30 h-8 bg-gray-800 flex items-center justify-center rounded-md hover:scale-105 hover:shadow-2xl hover:shadow-black">
              {/* Placeholder for the logo */}
              <p className="text-white text-xs p-1 ">Global Tech Group</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
