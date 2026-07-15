
"use client";
import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function AddToCartPage() {
  const { cart } = useCart();
  const lastAdded = cart[cart.length - 1];

  return (
    <div className="container mx-auto py-20 px-6 flex flex-col items-center justify-center text-center">
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <CheckCircle size={64} className="text-green-600" />
      </div>

      <h1 className="text-4xl font-bold mb-4">Added to Cart Successfully!</h1>
      
      {lastAdded && (
        <div className="p-4 border rounded-xl mb-8 bg-gray-50 flex items-center gap-4">
          <img src={lastAdded.image} className="w-16 h-16 object-cover rounded" />
          <p className="font-semibold text-lg">{lastAdded.name}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link href="/products" className="border border-gray-900 py-3 px-8 rounded-xl font-bold hover:bg-gray-100 transition-all">
          Continue Shopping
        </Link>
        <Link href="/cart" className="bg-gray-900 text-white py-3 px-8 rounded-xl font-bold hover:bg-gray-800 transition-all">
          Go to Cart
        </Link>
      </div>
    </div>
  );
}