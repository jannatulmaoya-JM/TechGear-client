import { MapPin, Mail, Phone } from "lucide-react";
export default function ContactPage() {
  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm">
      
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <MapPin className="w-6 h-6 text-indigo-700" />
                </div>
                <p>123 Tech Street, Dhaka, Bangladesh</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <Mail className="w-6 h-6 text-indigo-700" />
                </div>
                <p>support@techgear.com</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <Phone className="w-6 h-6 text-indigo-700" />
                </div>
                <p>+880 1234-567890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
            <textarea 
              rows={4} 
              placeholder="Your Message" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
            <button className="w-full bg-indigo-700 text-white py-3 rounded-lg font-bold hover:bg-indigo-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}