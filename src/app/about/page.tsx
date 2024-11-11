import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </FadeIn>
        
        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={200}>
              <div>
                <h2 className="text-2xl font-bold mb-4">Ajibola Bamidele (AlphaWGA)</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m a passionate software engineer focused on creating impactful digital solutions. 
                  With a strong foundation in web development, mobile applications, and AI, I approach 
                  each project with a product-oriented mindset, ensuring that every line of code 
                  contributes to meaningful results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My expertise spans across modern web technologies, cloud architecture, and artificial 
                  intelligence, allowing me to deliver comprehensive solutions that drive business value.
                </p>
                <div className="space-x-4">
                  <a 
                    href="/resume.pdf" 
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    download
                  >
                    Download Resume
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
                <ul className="space-y-2">
                  <li className="animate-float">🚀 Full-Stack Development</li>
                  <li className="animate-float" style={{ animationDelay: '0.2s' }}>📱 Mobile App Development</li>
                  <li className="animate-float" style={{ animationDelay: '0.4s' }}>🤖 AI & Machine Learning</li>
                  <li className="animate-float" style={{ animationDelay: '0.6s' }}>☁️ Cloud Architecture</li>
                  <li className="animate-float" style={{ animationDelay: '0.8s' }}>⚡ Performance Optimization</li>
                  <li className="animate-float" style={{ animationDelay: '1s' }}>🔒 Security Implementation</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <FadeIn delay={600}>
            <h2 className="text-2xl font-bold mb-8">Professional Journey</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-300">2021 - Present</p>
                <p className="mt-2">Leading development of scalable web applications and mentoring junior developers.</p>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
} 