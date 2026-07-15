
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/signin");
  if (session.user.role !== "admin") redirect("/dashboard");

  return <section className="border-2 border-red-500">{children}</section>;
}