"use client";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`).then(res => res.json()).then(setOrders);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <table className="w-full bg-white shadow rounded">
        <thead><tr className="bg-gray-100"><th className="p-4">Customer</th><th className="p-4">Status</th><th className="p-4">Action</th></tr></thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id} className="border-t text-center">
              <td className="p-4">{order.customerName}</td>
              <td className="p-4 font-bold text-indigo-600">{order.status}</td>
              <td className="p-4">
                <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">Mark Delivered</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}