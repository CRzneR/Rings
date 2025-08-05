"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 p-4 w-4/5 border rounded-xl border-gray-400 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-black">
          <Link href="/">Lord of Rings</Link>
        </div>
        <div className="space-x-6">
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
      </div>
    </nav>
  );
}
