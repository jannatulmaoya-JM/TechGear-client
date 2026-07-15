
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleViewDetails = (id: string) => {
    if (!session) {
      router.push("/signup");
    } else {
      router.push(`/product/${id}`); 
    }
  };

  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="bg-white p-5 rounded-2xl shadow-sm border">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <button 
                onClick={() => handleViewDetails(product._id)}
                className="w-full bg-gray-900 text-white py-2 rounded-lg mt-4 font-bold"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}