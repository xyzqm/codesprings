"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
const navigationItems = [
  {
    title: "About",
    href: "/#about",
    description: "Learn more about CodeSprings",
  },
  {
    title: "Instructors",
    href: "/#instructors",
    description: "Meet our instructors",
  },
];

export function Navbar() {
  return (
    <header className="fixed z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="top-0 container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full">
          <Link href="/" className="flex items-center space-x-2 h-full">
            <div className="h-full rounded-lg flex items-center justify-center py-1">
              <Image
                src={Logo}
                alt="CodeSprings Logo"
                className="h-full w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
                >
                  <a href={item.href} className="relative group/inner">
                    {item.title}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover/inner:w-9/12 transform -translate-x-1/2"></span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Enroll Button */}
        <div className="flex items-center space-x-4">
          <Button asChild>
            <a href="mailto:info@codesprings.org">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
