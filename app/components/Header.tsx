"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-2xl text-primary">SuezConnect</Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/" className="text-secondary hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-secondary hover:text-primary">About</Link></li>
            <li><Link href="/services" className="text-secondary hover:text-primary">Services</Link></li>
            <li><Link href="/blog" className="text-secondary hover:text-primary">Blog</Link></li>
            <li><Link href="/social-feed" className="text-secondary hover:text-primary">Social Feed</Link></li>
            <li><Link href="/contact" className="btn btn-primary text-base-100">Contact</Link></li>
          </ul>
        </div>
        <div className="flex-none lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="menu menu-vertical px-1">
            <li><Link href="/" className="text-secondary hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-secondary hover:text-primary">About</Link></li>
            <li><Link href="/services" className="text-secondary hover:text-primary">Services</Link></li>
            <li><Link href="/blog" className="text-secondary hover:text-primary">Blog</Link></li>
            <li><Link href="/social-feed" className="text-secondary hover:text-primary">Social Feed</Link></li>
            <li><Link href="/contact" className="btn btn-primary text-base-100 mt-2">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;