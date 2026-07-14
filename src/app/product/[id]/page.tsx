import ProductDetails from "@/component/ProductDetails";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 

async function getProduct(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound(); 
  }

  return (
    <div className="container mx-auto p-4">
     
      <Link 
        href="/product" 
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={20} />
        Back
      </Link>

      <ProductDetails product={product} />
    </div>
  );
}