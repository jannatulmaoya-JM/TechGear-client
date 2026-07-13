import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
          <Truck className="w-10 h-10 text-indigo-700 mb-4" />
          <h3 className="font-bold text-lg">Fast Delivery</h3>
          <p className="text-gray-500 text-sm">Same day shipping for all orders.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
          <ShieldCheck className="w-10 h-10 text-indigo-700 mb-4" />
          <h3 className="font-bold text-lg">100% Genuine</h3>
          <p className="text-gray-500 text-sm">Original products with warranty.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
          <Headphones className="w-10 h-10 text-indigo-700 mb-4" />
          <h3 className="font-bold text-lg">Support 24/7</h3>
          <p className="text-gray-500 text-sm">We are here to help you anytime.</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
          <CreditCard className="w-10 h-10 text-indigo-700 mb-4" />
          <h3 className="font-bold text-lg">Secure Payment</h3>
          <p className="text-gray-500 text-sm">Multiple safe payment options.</p>
        </div>

      </div>
    </section>
  );
}