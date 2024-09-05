import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="bg-stone-300 min-h-screen  flex flex-col space-y-7 items-center text-center justify-center font-bold text-4xl">
                
            
            <div className="flex gap-4">
                <h1 className="bg-purple-100 rounded-full p-1 px-4 flex text-center items-center">Oh</h1>
                <h1 className="bg-purple-200 rounded-md py-3 px-2">Dear</h1>
            </div>
            <div className="flex flex-row gap-4">
                <h1>You</h1>
                <h1 className="bg-yellow-400 hover:bg-red-600 rounded-sm p-1 px-4 flex text-center items-center">are</h1>
                <h1>Lost</h1>
            </div>
            <div>
                <Image src={"/images/404.jpg"}
                alt={"404 page"}
                width={300}
                height={150}
                className=" h-auto "/>
            </div>
            <p className="space-x-4 ">
                
                <Link href={"/"} className="font-bold p-1 px-3 rounded-full text-green-900 hover:underline bg-pink-900/20">
                    safe Home
                </Link>{" "}
               
            </p>
        </div>
    );
}
