export default function Testimonials() {
  const reviews = [
    { 
      name: "Rahim Ahmed", 
      text: "The gadgets from Tech Gear are completely original, and the delivery was incredibly fast." 
    },
    { 
      name: "Sara Khan", 
      text: "I bought a laptop from here; I am truly impressed by their packaging and service." 
    },
    { 
      name: "Karim Uddin", 
      text: "The support team is very helpful and provides quick solutions to any issues." 
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <p className="text-gray-600 italic mb-6">"{rev.text}"</p>
              <h4 className="font-bold text-indigo-700">- {rev.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}