
"use client";
import Link from "next/link";
import { useSession } from "@/lib/auth-client"; 
export default function UserLayout({ children }: { children: React.ReactNode }) {
  
  const { data: session } = useSession();
  
  const userEmail = session?.user?.email;
  const isAdmin = userEmail === "maoya@gmail.com"; 

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-10 text-blue-400">TechGear</h2>
        <nav className="space-y-4">
          <Link href="/dashboard/user/profile" className="block p-3 hover:bg-gray-800 rounded">My Profile</Link>
          <Link href="/dashboard/user/my-orders" className="block p-3 hover:bg-gray-800 rounded">My Orders</Link>
          
          {isAdmin && (
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-xs uppercase mb-2">Admin Control</p>
              <Link href="/dashboard/admin" className="block p-3 bg-red-600 hover:bg-red-700 rounded font-bold">
                Switch to Admin Panel
              </Link>
            </div>
          )}
          
          <hr className="border-gray-700 my-4"/>
          <Link href="/" className="block p-3 text-blue-400 hover:bg-gray-800 rounded">Back to Home</Link>
        </nav>
      </aside>
      
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}