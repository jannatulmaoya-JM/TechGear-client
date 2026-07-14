"use client";

import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AddToCartPage() {
  return (
    <div className="container mx-auto py-20 px-6 flex flex-col items-center justify-center text-center">
      {/* Success Icon */}
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <CheckCircle size={64} className="text-green-600" />
      </div>

      <h1 className="text-4xl font-bold mb-4">Added to Cart Successfully!</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The item has been added to your shopping cart. You can now proceed to checkout or continue shopping for more gadgets.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link 
          href="/products" 
          className="flex items-center justify-center gap-2 border border-gray-900 py-3 px-8 rounded-xl font-bold hover:bg-gray-100 transition-all"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>
        
        <Link 
          href="/cart" 
          className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-8 rounded-xl font-bold hover:bg-gray-800 transition-all"
        >
          <ShoppingCart size={20} />
          Go to Cart
        </Link>
      </div>
    </div>
  );
}