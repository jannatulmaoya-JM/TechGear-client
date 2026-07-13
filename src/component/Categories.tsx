import { Laptop, Smartphone, Headphones, Watch } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    { name: "Laptops", count: "120+ Products", icon: Laptop, color: "bg-blue-200" },
    { name: "Smartphones", count: "85+ Products", icon: Smartphone, color: "bg-purple-200" },
    { name: "Accessories", count: "200+ Products", icon: Headphones, color: "bg-green-200" },
    { name: "Smart Watches", count: "45+ Products", icon: Watch, color: "bg-orange-200" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div 
                key={index} 
              
                className={`${cat.color} p-8 rounded-2xl border border-transparent hover:border-gray-600 transition flex flex-col items-center justify-center gap-4 cursor-pointer`}
              >
                <div className="bg-gray-200 p-4 rounded-full shadow-sm">
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-gray-500 text-sm">{cat.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}