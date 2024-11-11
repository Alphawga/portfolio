'use client'

import FadeIn from '@/components/FadeIn';
import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ParticleBackground />
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Ajibola Bamidele</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              A product- and result-oriented software engineer specializing in building exceptional digital experiences.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="space-x-4">
              <a
                href="/about"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                About Me
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>

          
        </div>
      </section>
    </main>
  );
}
