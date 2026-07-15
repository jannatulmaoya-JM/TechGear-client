
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  
  const router = useRouter();
  const isLoggedIn = true; 

  useEffect(() => {

    fetch("http://localhost:5000/api/products") 
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleDetailsClick = (id: string) => {
    if (!isLoggedIn) {
      router.push("/signin");
    } else {
      router.push(`/product/${id}`);
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-[1500px] mx-auto px-6"> 
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-500">Top-rated gadgets this week.</p>
          </div>
          
        
          <div className="flex gap-2">
            <button 
              ref={(node) => setPrevEl(node)}
              className="p-2 border rounded-full hover:bg-gray-100 transition duration-300 active:scale-95 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              ref={(node) => setNextEl(node)}
              className="p-2 border rounded-full hover:bg-gray-100 transition duration-300 active:scale-95 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

  
        {products.length === 0 ? (
          <div className="text-center py-10 text-gray-500">Loading products...</div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            spaceBetween={20}
            
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 15 }, 
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 }, 
              1536: { slidesPerView: 6, spaceBetween: 24 }, 
            }}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id} className="py-4">
                <div className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between">
                  <div>
               
                    <div className="w-full h-44 overflow-hidden rounded-xl mb-4 bg-gray-50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300" 
                      />
                    </div>
                   
                    <h3 className="font-bold text-base line-clamp-1 text-gray-800 mb-1" title={product.name}>
                      {product.name}
                    </h3>
                    <p className="text-indigo-600 font-bold text-sm mb-4">{product.price} BDT</p>
                  </div>
                  
                  <Button 
 
                   className="w-full font-bold text-white bg-[#1A202C] hover:bg-gray-800 transition-all duration-300 rounded-lg"
                   onClick={() => handleDetailsClick(product._id)}
                 >
                   View Details
                 </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}