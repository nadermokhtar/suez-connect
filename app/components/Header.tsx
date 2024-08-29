import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-2xl text-primary">SuezConnect</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/" className="text-secondary hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-secondary hover:text-primary">About</Link></li>
            <li><Link href="/services" className="text-secondary hover:text-primary">Services</Link></li>
            <li><Link href="/blog" className="text-secondary hover:text-primary">Blog</Link></li>
            <li><Link href="/social-feed" className="text-secondary hover:text-primary">Social Feed</Link></li>
            <li><Link href="/contact" className="btn btn-primary text-base-100">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;