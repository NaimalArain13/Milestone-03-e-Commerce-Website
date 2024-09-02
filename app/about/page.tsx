import Link from "next/link";

export default function About(){
    return(
       <>
       <section className="bg-bg py-16 px-8">
  <h1 className="text-4xl font-bold text-gray-800 text-center">About TechBookStore</h1>
</section>
<section className="bg-blue-800/10 py-8 px-8">
  <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
    At TechBookStore, we believe in empowering tech enthusiasts, developers, and learners with the latest and most relevant tech-related books. Our carefully curated collection covers a wide range of topics, from coding and development to artificial intelligence, design, and more.
  </p>
</section>
<section className="bg-bg py-12 px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div>
      <img src="/icons/innovation.png" alt="Innovation Icon" className="mx-auto mb-4"/>
      <h3 className="text-2xl font-bold text-gray-800">Innovation</h3>
      <p className="text-gray-600">We bring the latest tech insights to your doorstep.</p>
    </div>
    <div>
      <img src="/icons/quality.png" alt="Quality Icon" className="mx-auto mb-4"/>
      
      <h3 className="text-2xl font-bold text-gray-800">Quality</h3>
      <p className="text-gray-600">Our books are carefully selected for their high quality and relevance.</p>
    </div>
    <div>
      <img src="/icons/community.png" alt="Community Icon" className="mx-auto mb-4"/>
      <h3 className="text-2xl font-bold text-gray-800">Community</h3>
      <p className="text-gray-600">We support a global community of tech enthusiasts and learners.</p>
    </div>
  </div>
</section>
<section className="bg-bg py-8 px-8 text-center">
  <Link href="/product">
  <button className=" mt-7 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-cyan-500 text-2xl p-2 px-7 shadow-x-2xl transition-shadow">
  Explore Our Collection
          </button>
    
  </Link>
</section>
</>
    )
}