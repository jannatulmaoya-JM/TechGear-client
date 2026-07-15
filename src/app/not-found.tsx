import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
 
      
      <Link 
        href="/" 
        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </div>
  );
}