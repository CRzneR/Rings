"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 p-4 w-4/5 border rounded-xl border-gray-400 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link href="/">Factory LNG</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          <Link
            href="/"
            className="text-black hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
