import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">SuezConnect Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date} | {post.author}</p>
              <p>{post.excerpt}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}