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

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false;

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
        
        {isLoggedIn && (
          <NavbarItem><Link href="/dashboard" className="text-indigo-700 font-bold">Dashboard</Link></NavbarItem>
        )}
      </NavbarContent>


     <NavbarContent justify="end" className="flex items-center gap-4">
  {!isLoggedIn ? (
    <>
      <NavbarItem className="hidden lg:flex">
        {/* SignIn */}
        <Link 
          href="/signin" 
          className="h-[40px] px-6 border-2 border-indigo-600 text-indigo-700 font-semibold rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-all"
        >
          SignIn
        </Link>
      </NavbarItem>
      
      <NavbarItem>
        {/* SignUp */}
        <Link 
          href="/signup" 
          className="h-[40px] px-6 bg-indigo-700 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-indigo-800 shadow-md transition-all"
        >
          SignUp
        </Link>
      </NavbarItem>
    </>
  ) : (
    <NavbarItem>
      <Button variant="flat" color="danger" className="h-[40px] px-6 font-semibold rounded-lg">Logout</Button>
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