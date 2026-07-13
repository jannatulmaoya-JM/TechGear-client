export default function FAQ() {
  const faqs = [
    { q: "Do you offer a warranty?", a: "Yes, all our products come with a 1-year official warranty." },
    { q: "Is cash on delivery available?", a: "Yes, we offer cash on delivery across all cities in Bangladesh." },
    { q: "How can I return a product?", a: "You can return products within 7 days if they are unused and in original packaging." },
  ];

  return (
    <section className="py-16 bg-blue-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}