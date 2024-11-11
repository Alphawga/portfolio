import FadeIn from '@/components/FadeIn';
import SkillChart from '@/components/SkillChart';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Performance", level: 75 }
      ]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-12">Technical Skills</h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="mb-16">
            <SkillChart />
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `progressAnimation 1s ease-out`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Tools */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Additional Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "VS Code", "Figma", "Postman", "Redux", "Jest", "GitHub Actions",
              "Firebase", "Vercel", "Webpack", "REST APIs", "Material-UI", "Sass"
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 