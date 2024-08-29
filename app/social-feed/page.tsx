import Link from 'next/link';

export default function SocialFeed() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl mb-8">
          We have not yet integrated social media feeds yet. Come back again later.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Oasis
        </Link>
      </div>
    </div>
  );
}
