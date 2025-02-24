import { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-black text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      <Link href="/" className="text-4xl font-bold text-purple-500">Portfolio.</Link>
      <nav className={`absolute top-16 right-0 bg-black w-full md:w-auto md:static flex flex-col md:flex-row items-center md:space-x-6 md:bg-transparent transition-all ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <Link href="#home" className="hover:text-purple-400 py-2 md:py-0">Home</Link>
        <Link href="#about" className="hover:text-purple-400 py-2 md:py-0">About</Link>
        <Link href="#services" className="hover:text-purple-400 py-2 md:py-0">Services</Link>
        <Link href="#portfolio" className="hover:text-purple-400 py-2 md:py-0 border-b-2 border-purple-500">Portfolio</Link>
        <Link href="#contact" className="hover:text-purple-400 py-2 md:py-0">Contact</Link>
      </nav>
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-400" />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}