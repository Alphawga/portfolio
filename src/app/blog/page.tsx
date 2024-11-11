export default function Blog() {
  // Sample blog posts - replace with your actual blog data
  const posts = [
    {
      title: "Building Scalable Web Applications",
      excerpt: "Learn the best practices for creating scalable and maintainable web applications using modern technologies.",
      date: "2024-03-15",
      slug: "building-scalable-web-applications",
      tags: ["Web Development", "Architecture", "Performance"]
    },
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the landscape of software development and what it means for developers.",
      date: "2024-03-10",
      slug: "future-of-ai-in-software-development",
      tags: ["AI", "Technology", "Future"]
    },
    {
      title: "Optimizing React Applications",
      excerpt: "Deep dive into performance optimization techniques for React applications.",
      date: "2024-03-05",
      slug: "optimizing-react-applications",
      tags: ["React", "Performance", "JavaScript"]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        {/* Blog Posts Grid */}
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-none"
            >
              <div className="space-y-4">
                <div>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 