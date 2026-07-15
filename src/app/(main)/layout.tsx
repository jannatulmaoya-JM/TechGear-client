import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import ThemeToggle from "@/component/ThemeToggle";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ThemeToggle />
    </>
  );
}