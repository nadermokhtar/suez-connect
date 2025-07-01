"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-2xl text-primary">SuezConnect</Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost">Insights</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/social-feed">Social Feed</Link></li>
              </ul>
            </li>
            <li><Link href="/contact" className="btn btn-primary ml-2">Contact</Link></li>
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
          <ul className="menu menu-compact">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/social-feed">Social Feed</Link></li>
            <li><Link href="/contact" className="btn btn-primary mt-2">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;