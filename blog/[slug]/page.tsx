import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date} | {post.author}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}