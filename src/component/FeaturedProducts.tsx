import { Button } from "@heroui/button";

export default function FeaturedProducts() {

  const products = [
    { name: "Pro Wireless Mouse", price: "$59", img: "bg-gray-200" },
    { name: "Mechanical Keyboard", price: "$129", img: "bg-gray-200" },
    { name: "Noise Cancelling Headphones", price: "$199", img: "bg-gray-200" },
    { name: "Ultra HD Monitor", price: "$299", img: "bg-gray-200" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-500">Check out our top-rated gadgets this week.</p>
          </div>
          <Button variant="bordered" className="font-semibold">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group border rounded-2xl p-4 hover:shadow-xl transition">
              <div className={`w-full h-48 ${product.img} rounded-xl mb-4 group-hover:scale-105 transition duration-300`}>
          
              </div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-indigo-700 font-bold mb-4">{product.price}</p>
              <Button color="primary" className="w-full">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}