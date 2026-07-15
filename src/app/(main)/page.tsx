 "use client"
import FeaturedProducts from "@/component/FeaturedProducts";
import Banner from "../../component/Banner";
import Features from "../../component/Features"
import Stats from "@/component/Stats";
import Testimonials from "@/component/Testimonials";
import FAQ from "@/component/FAQ";
import Categories from "@/component/Categories";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <FeaturedProducts/>
      <Categories/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <Stats/>


    
    </div>
  );
}