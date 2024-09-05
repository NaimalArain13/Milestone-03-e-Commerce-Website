import Image from "next/image";
import Link from "next/link";
// import "@/app/global.css"

export default function HeroSection() {
  return (
    <section className="hero-section-bg bg-gradient-to-r from-navy to-cyan-500 py-16 px-4 mb-4">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-extrabold text-white  mb-4">
          Discover Our Best-Selling Tech Books
        </h1>
        <p className="text-lg text-white mb-8">
          Explore the latest and greatest in tech literature
        </p>

        <div className="flex justify-center flex-row space-x-8 ">
          <div className="bg-transparent shadow-lg  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs4.png"
              alt="Book Title 1"
              width={280}
              height={380}
              className="h-60 object-cover"
            />
          </div>

          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs3.jpg"
              alt="Book Title 2"
              width={400}
              height={380}
              className="h-60 w-full object-cover rounded-full"
            />
          </div>

          
          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs4.png"
              alt="Book Title 2"
              width={280}
              height={380}
              className="h-60 object-cover mix-blend-hard-light"
            />
          </div>
        </div>

        <div className="mt-12">
          <Link href={"/product"} className="bg-amber-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-600 transition duration-300">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}
