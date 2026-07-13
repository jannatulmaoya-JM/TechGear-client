
"use client";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem 
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client"; 
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { CgProfile } from "react-icons/cg";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession(); 

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      className="h-20 bg-white" 
      maxWidth="xl"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="font-bold text-2xl flex items-center gap-2">
            <span className="text-indigo-700">Tech</span>
            <span className="text-gray-800">Gear</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem><Link href="/" className="text-gray-600 hover:text-indigo-700 font-medium">Home</Link></NavbarItem>
        <NavbarItem><Link href="/product" className="text-gray-600 hover:text-indigo-700 font-medium">Product</Link></NavbarItem>
        <NavbarItem><Link href="/about-us" className="text-gray-600 hover:text-indigo-700 font-medium">About Us</Link></NavbarItem>
        <NavbarItem><Link href="/contact" className="text-gray-600 hover:text-indigo-700 font-medium">Contact</Link></NavbarItem>
       
        {!isPending && session && (
          <>
            <NavbarItem>
              <Link href="/add to card" className="text-gray-600 hover:text-indigo-700 font-medium">Add To Card</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/dashboard" className="text-gray-600 hover:text-indigo-700 font-medium">Dashboard</Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="flex items-center gap-4">
        {isPending ? (
          <NavbarItem>Loading...</NavbarItem>
        ) : !session ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/signin" className="h-[40px] px-6 border-2 border-indigo-600 text-indigo-700 font-semibold rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-all">
                SignIn
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/signup" className="h-[40px] px-6 bg-indigo-700 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-indigo-800 shadow-md transition-all">
                SignUp
              </Link>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem className="flex items-center gap-4">
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <button className="focus:outline-none">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                    {(session as any)?.user?.image && !(session as any)?.user?.image.includes("picture/0") ? (
                      <img 
                        src={(session as any).user.image} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600">
                        <CgProfile size={24} />
                      </div>
                    )}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <div className="text-sm">
                  <p className="font-bold">{(session as any)?.user?.name || "User"}</p>
                  <p className="text-gray-500">{(session as any)?.user?.email || "No Email"}</p>
                </div>
              </PopoverContent>
            </Popover>

            <Button 
              onClick={handleLogout} 
              variant="flat" 
              color="danger" 
              className="h-[40px] px-6 font-semibold rounded-lg"
            >
              Logout
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem><Link href="/" className="w-full">Home</Link></NavbarMenuItem>
        <NavbarMenuItem><Link href="/product" className="w-full">Product</Link></NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}