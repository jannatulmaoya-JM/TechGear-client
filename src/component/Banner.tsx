
"use client";
import { Button } from "@heroui/button"; 
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full py-16 px-6 bg-purple-400 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
   
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,_#1e3a8a,_transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="flex-1 w-full space-y-6 text-center lg:text-left">
        
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">

      <span className="block text-white/`110 [-webkit-text-stroke:2px_#4AC5E4] drop-shadow-[0_0_10px_rgba(74,197,228,0.5)]">
        DIGITAL
       </span>
  
       <span className="block text-white/30 [-webkit-text-stroke:2px_#E4C560] drop-shadow-[0_0_10px_rgba(228,197,96,0.5)]">
           GADGETS
          </span>
          </h1>
          
          <p className="tex-cyon-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Curated Tech for Modern Living. Discover the latest collection of premium digital gadgets designed for your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
      
      <Link href="/products">
        <Button 
          color="primary" 
          variant="bordered" 
          className="font-bold px-8 py-6 rounded-full hover:bg-white/10 flex items-center gap-2"
        >
         Shop Now <FaArrowRight />
        </Button>
      </Link>

      <Button 
        color="primary" 
        variant="bordered" 
        className="font-bold border-white/20 px-8 py-6 rounded-full hover:bg-white/10 flex items-center gap-2"
      >
        Explore Now <FaArrowRight />
      </Button>
      
    </div>
          
          
        </div>

        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            <img 
              src="/images/Banner.png" 
              alt="Digital Gadgets" 
              className="w-full h-full object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}