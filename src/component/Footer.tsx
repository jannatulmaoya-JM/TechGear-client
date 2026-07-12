import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-indigo-400 mb-4">TechGear</h2>
          <p className="text-gray-400 text-sm">Best gadgets for your daily needs.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/contact">Helpdesk</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@techgear.com</p>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs mt-10">
        &copy; 2026 TechGear. All rights reserved.
      </div>
    </footer>
  );
}