"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard Overview</h1>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded">Total Sales: $5,000</div>
        <div className="bg-green-500 text-white p-4 rounded">Orders: 45</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Users: 120</div>
        <div className="bg-red-500 text-white p-4 rounded">Stock Alert: 5 items</div>
      </div>

   
      <div className="grid grid-cols-3 gap-6">
        <Link href="/dashboard/admin/products" className="border p-6 shadow hover:shadow-lg rounded">
          <h2 className="font-bold">Product Management</h2>
          <p>Add, Edit, Remove Products</p>
        </Link>
        <Link href="/dashboard/admin/orders" className="border p-6 shadow hover:shadow-lg rounded">
          <h2 className="font-bold">Order Management</h2>
          <p>Track Pending & Delivered Orders</p>
        </Link>
        <Link href="/dashboard/admin/faq" className="border p-6 shadow hover:shadow-lg rounded">
          <h2 className="font-bold">FAQ Management</h2>
          <p>Reply to Customer Queries</p>
        </Link>
      </div>
    </div>
  );
}