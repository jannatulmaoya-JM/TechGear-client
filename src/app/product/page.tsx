"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; 

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProducts.map((product: any) => (
            <div key={product._id} className="bg-white p-5 rounded-2xl shadow-sm border">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-indigo-700 font-bold mb-4">{product.price} BDT</p>
              <div className="flex flex-col gap-2">
               
                <Link href={`/product/${product._id}`}className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-center font-bold transition-all"
                >View Details</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-indigo-700 text-white' : 'bg-white border'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}