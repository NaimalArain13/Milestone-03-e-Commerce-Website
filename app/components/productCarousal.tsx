import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSize({ images }: { images: string[] }) {
  return (
    <div className="relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Best Selling Books
      </h1>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full flex items-center justify-center overflow-hidden"
      >
        <CarouselContent className="flex w-full">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 basis-full md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-2">
                <Card className="w-full h-72"> {/* Card with fixed height */}
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      width={200} 
                      height={250} 
                      objectFit="cover"
                      className="h-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Previous Arrow */}
        <CarouselPrevious className="absolute left-0 p-2 text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
          &#9664; {/* Unicode for left arrow */}
        </CarouselPrevious>

        {/* Custom Next Arrow */}
        <CarouselNext className="absolute right-0 p-2 text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
          &#9654; {/* Unicode for right arrow */}
        </CarouselNext>
      </Carousel>
    </div>
  );
}
