
"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ product }: { product: any }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); 
    router.push("/add-to-cart");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">{product.category}</span>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <div className="text-3xl text-indigo-700 font-bold mb-6">{product.price} BDT</div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all ${
              product.stock > 0 ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}