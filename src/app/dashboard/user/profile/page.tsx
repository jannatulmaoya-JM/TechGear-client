"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, refetch } = useSession();
  const user = session?.user as any;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        image: user.image || "",
      });
    }
  }, [user]);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user?.email, ...formData }),
      });

      if (res.ok) {
        setMessage("Profile updated successfully!");
        
        await refetch(); 
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Failed to update profile.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  if (!user) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white p-8 rounded-2xl border shadow-sm mb-6 flex items-center gap-6">
        <div className="relative">
          <img src={formData.image || "/default-avatar.png"} alt="User" className="w-24 h-24 rounded-full border object-cover" />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full text-xs hover:bg-blue-700"
          >
            Edit
          </button>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{formData.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border shadow-sm">
        <h3 className="text-xl font-bold mb-6">Manage My Profile</h3>
        {message && <p className="text-green-600 mb-4 font-bold">{message}</p>}
        
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input className="w-full p-3 border rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Phone</label>
              <input className="w-full p-3 border rounded-lg" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Address</label>
            <input className="w-full p-3 border rounded-lg" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">Update Profile</button>
        </form>
      </div>
    </div>
  );
}