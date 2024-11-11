// type Props = {
//   params: {
//     slug: string;
//   };
// };

import Link from "next/link";

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "Building Scalable Web Applications",
    date: "2024-03-15",
    content: `
      <p>
        Building scalable web applications requires careful consideration of various factors including architecture, 
        performance optimization, and maintainability. In this post, we'll explore the key principles and best practices 
        that help create robust web applications that can grow with your user base.
      </p>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Modular Architecture</li>
        <li>Performance Optimization</li>
        <li>Caching Strategies</li>
        <li>Database Scaling</li>
      </ul>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    `,
    tags: ["Web Development", "Architecture", "Performance"]
  };

  return (
    <main className="min-h-screen py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
} 