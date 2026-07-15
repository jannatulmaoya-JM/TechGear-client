
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import ProductDetails from "@/component/ProductDetails";

export default function Page() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    if (!isPending && !session) {
      router.push("/signup");
      return;
    }

   
    if (session && id) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [session, isPending, id, router]);

  if (isPending) return <div className="p-10">Loading...</div>;
  if (!product) return <div className="p-10">Loading product details...</div>;

  return (
    <div className="container mx-auto p-4">
      <ProductDetails product={product} />
    </div>
  );
}