"use client";
import { useEffect, useState } from "react";

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faqs").then(res => res.json()).then(setFaqs);
  }, []);

  const handleReply = async (id: string, answer: string) => {
    await fetch(`http://localhost:5000/api/faqs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    });
    alert("Reply Sent!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">FAQ Management</h1>
      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq._id} className="bg-white p-4 shadow rounded border">
            <p className="font-bold">Q: {faq.question}</p>
            <input className="border w-full mt-2 p-2" placeholder="Write answer..." id={`ans-${faq._id}`} />
            <button onClick={() => handleReply(faq._id, (document.getElementById(`ans-${faq._id}`) as HTMLInputElement).value)} 
                    className="bg-black text-white px-4 py-2 mt-2 rounded">Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
}