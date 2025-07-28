import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Courses",
    href: "/courses",
    description: "Browse our programming courses and bootcamps",
  },
  {
    title: "About",
    href: "#about",
    description: "Learn more about CodeSprings",
  },
  {
    title: "Instructors",
    href: "/instructors",
    description: "Meet our expert instructors",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights and tutorials",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
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
            {/* <span className="font-bold text-xl">CodeSprings</span> */}
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Enroll Button */}
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
