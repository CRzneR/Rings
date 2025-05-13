"use client";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#84aeb6] text-black px-8 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        {/* Logo / Icon */}
        <div className="grid grid-cols-3 gap-2">
          <p>Logo</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12 text-sm">
          <div>
            <h3 className="font-semibold mb-2">About Me</h3>
            <ul className="space-y-1">
              <li>Hobby</li>
              <li>Other Work</li>
              <li>Newsletter</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>FAQ’s</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-black" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Copyright © Christoph Renz</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-1 border border-black px-2 py-1 mt-2 md:mt-0"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
