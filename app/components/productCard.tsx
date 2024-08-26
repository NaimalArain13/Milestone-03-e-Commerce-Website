import Image from "next/image";
import Link from "next/link";


interface CardProps {
  id:string,
    title:string,
     description:string,
      price?:number, 
      image:string// Image is optional
}

function ProductCard({ title, description, id,image,price }:CardProps){
  // console.log(name ,description ,postid ,image);
  
  return (
    <div className=" text-[#685752] p-6 border border-[#f8f5f4] rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {image && (
        <div className="mb-4 flex-shrink-0 shadow-2xl z-50">
          <Image
            src={image}
            alt={title} // Use heading or a meaningful alt text
            width={350} // Adjust width as needed
            height={250} // Adjust height as needed
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex-grow mt-8">
        <h2 className="text-lg font-semibold text-red-950 m-2">{title}</h2>
        <p className="text-[#8a7068] m-2 text-sm">{description}</p>
        <p className="m-2 text-red-900">${price}</p>
      </div>
      <div className="mt-4">
        <Link
          href={`/product/${id}`} // Link to the dynamic blog post
          className="block  text-[#6e5a53] text-center py-2 px-4 rounded-lg  hover:text-red-950 transition-colors"
        >
          view product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;