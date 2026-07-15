

"use client";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({ name: "", price: "", image: "", description: "", stock: 0 });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddClick = () => {
    setFormData({ name: "", price: "", image: "", description: "", stock: 0 });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditClick = (product: any) => {
    setFormData(product);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const deleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`, { method: "DELETE" });
      fetchProducts();
    }
  };

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const { _id, ...updateData } = formData;
    
    const url = isEditing 
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${_id}` 
      : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`;

    await fetch(url, {
      method: isEditing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });

    setIsModalOpen(false);
    fetchProducts();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button 
          onClick={handleAddClick} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold"
        >
          + Add New Product
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="p-4"><img src={product.image} className="w-12 h-12 rounded object-cover" /></td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">{product.price} BDT</td>
                <td className="p-4 flex gap-4">
                  <button onClick={() => handleEditClick(product)} className="text-blue-600 underline">Edit</button>
                  <button onClick={() => deleteProduct(product._id)} className="text-red-600 underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <form onSubmit={saveProduct} className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
            <input className="border w-full p-2 mb-2 rounded" value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Name" required />
            <input className="border w-full p-2 mb-2 rounded" value={formData.image || ""} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="Image Link" required />
            <input className="border w-full p-2 mb-2 rounded" type="number" value={formData.price || ""} onChange={e => setFormData({...formData, price: Number(e.target.value)})} placeholder="Price" required />
            <textarea className="border w-full p-2 mb-2 rounded" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Description" required />
            <div className="flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded flex-1">Save</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded flex-1">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}