"use client";
import { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`);
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

 
  const handleCancelOrder = async (id: string) => {
    if (confirm("Are you sure you want to cancel this order?")) {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/${id}`, { method: 'DELETE' });
      fetchOrders(); 
    }
  };

  return (
    <div className="max-w-4xl bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-3">Order ID</th>
            <th className="pb-3">Total</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o: any) => (
            <tr key={o._id} className="border-b">
              <td className="py-4">{o._id}</td>
              <td className="py-4">{o.total} BDT</td>
              <td className="py-4 text-green-600 font-semibold">Confirmed</td>
              <td className="py-4">
                <button 
                  onClick={() => handleCancelOrder(o._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}