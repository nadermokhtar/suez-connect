import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Oasis Not Found</h2>
        <p className="text-xl mb-8">
          It seems you&apos;ve wandered into the desert. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Oasis
        </Link>
      </div>
    </div>
  );
}
