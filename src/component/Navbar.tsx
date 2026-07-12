"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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

      <NavbarContent justify="start" className="px-6">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="font-bold text-2xl text-indigo-700 ml-4">
            TechGear
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/" className="text-gray-600 hover:text-indigo-700 font-medium">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/product" className="text-gray-600 hover:text-indigo-700 font-medium">Product</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about us" className="text-gray-600 hover:text-indigo-700 font-medium">About Us</Link>
        </   NavbarItem>                                                                
      </NavbarContent>        

      <NavbarContent justify="end" className="px-4">
        <NavbarItem className="hidden lg:flex">
          <Button variant="light" as={Link} href="/signin" className="text-gray-600 font-semibold">SignIn</Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button variant="light" as={Link} href="/signup" className="bg-indigo-700 text-white font-semibold mr-4" radius="sm">
           SignUp
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full text-lg text-gray-700" href="/">Home</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}