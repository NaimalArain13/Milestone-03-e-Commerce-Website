import HeroSection from "./components/herosection";
import {CarouselSize} from "./components/productCarousal";

export default function Home() {
  return (
  <div>
    
    <HeroSection />
    <CarouselSize images={["/images/id1.jpg" , "/images/id4.jpg" , "/images/id6.jpg" , "/images/id9.jpg", "/images/id14.jpg"]}/>
  </div>  
  );
}
