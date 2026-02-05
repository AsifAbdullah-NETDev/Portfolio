"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">
      <h1 className="font-bold text-xl">Abdullah Al Asif</h1>

      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg transition-all ${
              isActive(link.href) 
                ? "font-bold text-black" 
                : "font-normal text-gray-600 hover:text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}