"use client";
import { useState } from "react";

export default function UserDashboard() {
  const [profile, setProfile] = useState({
    name: "Maoya",
    email: "maoya@example.com",
    number: "01700000000",
    password: "",
  });
  const [image, setImage] = useState<string | null>(null);

  // ইমেজ সিলেক্ট হ্যান্ডলার
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      
      {/* ইমেজ আপলোড */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
          {image ? <img src={image} alt="Profile" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">No Image</div>}
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4 text-sm" />
      </div>

      {/* প্রোফাইল আপডেট ফর্ম */}
      <div className="bg-white p-6 shadow-sm rounded-lg space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="border w-full p-2 rounded" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input className="border w-full p-2 rounded" value={profile.email} disabled />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input className="border w-full p-2 rounded" value={profile.number} onChange={e => setProfile({...profile, number: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input type="password" className="border w-full p-2 rounded" placeholder="Leave blank to keep current" onChange={e => setProfile({...profile, password: e.target.value})} />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">Update Profile</button>
      </div>
    </div>
  );
}