
"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Trash2, Copy, CheckCircle } from "lucide-react";

export default function AddToCartPage() {
  const { cart, removeFromCart } = useCart(); 
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
  const paymentNumber = "+8801700000000";

  const handleOrderPlace = async () => { 
  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }


  const orderData = {
    items: cart,
    total: subtotal,
    paymentMethod: paymentMethod,
    user: "user@example.com", 
    status: "Pending"
  };

  try {
  
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      setShowPopup(true);
        } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error placing order:", error);
  }
};

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-16 h-16 rounded" />
            <p className="font-bold">{item.name}</p>
          </div>
          <p className="font-bold">{item.price} BDT</p>
        </div>
      ))}

      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Payment Method</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {["bKash", "Nagad", "Rocket", "Bank"].map((m) => (
            <button key={m} onClick={() => setPaymentMethod(m)} 
              className={`p-3 border rounded-lg ${paymentMethod === m ? "bg-black text-white" : ""}`}>
              {m}
            </button>
          ))}
        </div>

        {paymentMethod && (
          <div className="mb-6 p-4 border border-blue-200 rounded bg-blue-50 flex justify-between items-center">
            <span>Send money to: <strong>{paymentNumber}</strong></span>
            <button 
  onClick={() => {
    navigator.clipboard.writeText(paymentNumber);
    alert("Number copied to clipboard!");
  }} 
  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
>
  <Copy size={16}/> Copy
</button>
          </div>
        )}

        <button onClick={handleOrderPlace} className="w-full bg-black text-white py-4 rounded-xl font-bold">
          Place Order (Total: {subtotal} BDT)
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl text-center">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={50} />
            <h2 className="text-2xl font-bold">Order Confirmed!</h2>
            <p>Thank you for your purchase.</p>
            <button onClick={() => window.location.href = "/"} className="mt-4 bg-gray-900 text-white px-6 py-2 rounded">Home</button>
          </div>
        </div>
      )}
    </div>
  );
}