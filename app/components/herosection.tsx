import Image from "next/image"
export default function HeroSection(){
    return(
        <section className="bg-bg py-16 px-4">
      <div className="mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8">
          Discover Our Best-Selling Tech Books
        </h1>
        <div className="flex justify-center flex-row space-x-8">
          <div className="shelf">
            <div className="book-card bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/id3.jpg" alt="Book Title 1" width={300} height={400} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Book Title 1</h2>
                <p className="text-amber-500 text-lg">$29.99</p>
              </div>
            </div>
            <div className="book-card bg-white shadow-lg rounded-lg overflow-hidden mt-8">
              <Image src="/id3.jpg" alt="Book Title 2" width={300} height={400} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Book Title 2</h2>
                <p className="text-amber-500 text-lg">$34.99</p>
              </div>
            </div>
            <div className="book-card bg-white shadow-lg rounded-lg overflow-hidden mt-8">
              <Image src="/id3.jpg" alt="Book Title 3" width={300} height={400} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Book Title 3</h2>
                <p className="text-amber-500 text-lg">$39.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}