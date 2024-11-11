import FadeIn from '@/components/FadeIn';
import Timeline from '@/components/Timeline';

export default function Experience() {
  const experiences = [
    {
      date: "2022 - Present",
      title: "Senior Software Engineer",
      description: "Led development of scalable web applications using Next.js and TypeScript. Implemented CI/CD pipelines reducing deployment time by 40%."
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      description: "Developed and maintained multiple client-facing applications. Optimized database queries improving performance by 50%."
    },
    {
      date: "2018 - 2020",
      title: "Software Developer",
      description: "Built and deployed mobile applications using React Native. Implemented real-time features using WebSocket."
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-12">Professional Experience</h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <Timeline events={experiences} />
        </FadeIn>
      </div>
    </main>
  );
} 