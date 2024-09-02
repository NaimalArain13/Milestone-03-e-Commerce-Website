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
    <Carousel
      opts={{
        align: "center", // Align items in the center
      }}
      className="w-full flex items-center justify-center overflow-hidden"
    >
      <CarouselContent className="flex w-full">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 basis-full md:basis-1/3 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="w-full">
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
