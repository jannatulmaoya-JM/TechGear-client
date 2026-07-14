"use client";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  stock: number;
  category: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  const router = useRouter();

  const handleAddToCart = () => {
    router.push("/add-to-cart");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-500 mb-4">Brand: <span className="font-semibold text-gray-800">{product.brand}</span></p>
          
          <div className="text-3xl text-indigo-700 font-bold mb-6">{product.price} BDT</div>
          
          {/* Rating Section */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold text-sm">
              ★ {product.rating} Rating
            </span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description || "No description available for this product."}
          </p>

          {/* Stock Section */}
          {product.stock > 0 ? (
            <div className="mb-6">
              <span className="text-green-600 font-semibold text-lg">✓ In Stock ({product.stock} available)</span>
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-red-600 font-bold text-lg bg-red-50 px-4 py-2 rounded-lg">
                 out of stock!
              </span>
            </div>
          )}

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