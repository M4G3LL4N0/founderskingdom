import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoundersKingdom",
  description:
    "The startup operating system for founders building multiple ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-filter: blur(5px) z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Left Section */}
            <a href="/" className="text-xl font-bold text-gray-800">
              FoundersKingdom
            </a>

            {/* Right Section */}
            <div className="flex space-x-4">
              <a href="/platform" className="text-gray-600 hover:text-gray-800">Platform</a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</a>
              <a href="/ecosystem" className="text-gray-600 hover:text-gray-800">Ecosystem</a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-800">Pricing</a>
              <a href="/investors" className="text-gray-600 hover:text-gray-800">Investors</a>
              <a href="/jobs" className="text-gray-600 hover:text-gray-800">Jobs</a>
            </div>

            {/* Far Right Button */}
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              onClick={() => window.location.href = "/get-started"}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className="fixed top-0 right-0 w-full bg-white/10 backdrop-filter: blur(5px) z-40 hidden md:block"
          id="mobile-menu"
        >
          <div className="container mx-auto px-4 py-4">
            <button 
              className="text-gray-700 flex items-center space-x-2"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h3.172a2 2 0 011.414 1.414l-4 4a2 2 0 01-1.414 0l-4-4a2 2 0 011.414-1.414h3.172" />
              </svg>
            </button>
            <div className="mt-4 space-y-2">
              <a href="/" className="text-gray-700 hover:text-gray-800">FoundersKingdom</a>
              <a href="/platform" className="text-gray-700 hover:text-gray-800">Platform</a>
              <a href="/dashboard" className="text-gray-700 hover:text-gray-800">Dashboard</a>
              <a href="/ecosystem" className="text-gray-700 hover:text-gray-800">Ecosystem</a>
              <a href="/pricing" className="text-gray-700 hover:text-gray-800">Pricing</a>
              <a href="/investors" className="text-gray-700 hover:text-gray-800">Investors</a>
              <a href="/jobs" className="text-gray-700 hover:text-gray-800">Jobs</a>
              <a href="/get-started" className="text-blue-600 text-decoration-none">Get Started</a>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
