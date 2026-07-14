import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-indigo-400 mb-4">TechGear</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Best gadgets for your daily needs. Premium quality, reliable service.
          </p>
        </div>

        {/* Link Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="text-gray-400 text-base space-y-3">
            <li><Link href="/about-us" className="hover:text-indigo-400 transition">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Suport Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="text-gray-400 text-base space-y-3">
            <li><Link href="/contact" className="hover:text-indigo-400 transition">Helpdesk</Link></li>
          </ul>
        </div>

        {/*Social & Contect Section*/}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-400 text-base mb-4">Email: support@techgear.com</p>
          
          {/* Socail Icons Section */}
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"><FaFacebook size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"><FaTwitter size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"><FaInstagram size={18} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"><FaLinkedin size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 mb-6"></div>

      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TechGear. All rights reserved.
      </div>
    </footer>
  );
}