import React from "react";
import { Code, Database, Server, Briefcase } from "lucide-react";
import { STORE } from "../context/AppContext";

export default function Skills() {
  const { light } = STORE();

  const skills = {
    frontend: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "CSS Grid & Flexbox" },
      { name: "Responsive Web Design" },
      { name: "Mobile-First Development" },
      { name: "Shadcn/UI" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Styled Components" },
    ],

    backend: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT Authentication" },
      { name: "Modular Architecture" },
      { name: "Redis" },
      { name: "SQLite" },
      { name: "Web Scraping (Puppeteer)" },
      { name: "Performance Optimization" },
      { name: "Code Splitting" },
      { name: "Lazy Loading" },
      { name: "React.memo / useMemo / useCallback" },
      { name: "Virtualization (React Window)" },
    ],

    database: [
      { name: "MongoDB" },
      { name: "Firebase Firestore" },
      { name: "MySQL" },
      { name: "SQL" },
    ],

    tools: [
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "TanStack React Query" },
      { name: "Context API" },
      { name: "Git & GitHub" },
      { name: "CI/CD Basics" },
      { name: "Postman" },
      { name: "Netlify" },
      { name: "Vite" },
      { name: "Vercel" },
      { name: "Chrome DevTools" },
      { name: "Redux DevTools" },
      { name: "PWA Configuration" },
      { name: "Internationalization – next-intl" },
    ],
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-extrabold tracking-tight ${
              light ? "text-gray-900" : "text-white"
            }`}
          >
            Technical Skills
          </h2>

          {/* Futuristic underline */}
          <div className="w-32 h-[2px] mx-auto my-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built around modern web technologies, performance optimization, and
            elegant UI engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Category Card Generator */}
          {[
            {
              title: "Frontend",
              icon: Code,
              color: "blue",
              items: skills.frontend,
            },
            {
              title: "Backend",
              icon: Server,
              color: "green",
              items: skills.backend,
            },
            {
              title: "Database",
              icon: Database,
              color: "purple",
              items: skills.database,
            },
            {
              title: "Tools & Libraries",
              icon: Briefcase,
              color: "orange",
              items: skills.tools,
            },
          ].map((group) => (
            <div
              key={group.title}
              className={`
                relative p-6 rounded-xl backdrop-blur-xl transition-all duration-300 
                border hover:scale-[1.03] hover:shadow-xl
                ${
                  light
                    ? "bg-white/70 border-gray-200"
                    : "bg-white/5 border-white/10"
                }
                before:absolute before:inset-0 before:rounded-xl before:z-[-1]
                before:bg-gradient-to-br before:opacity-20
                before:from-${group.color}-500/40 before:to-transparent
              `}
            >
              <div className="flex items-center mb-4">
                <group.icon
                  className={`text-${group.color}-500 drop-shadow-md`}
                  size={26}
                />
                <h3
                  className={`ml-3 text-xl font-semibold text-${group.color}-500`}
                >
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium tracking-wide
                      transition-all duration-200
                      border border-${group.color}-500/20
                      ${
                        light
                          ? `bg-${group.color}-50 text-${group.color}-700`
                          : `bg-${group.color}-500/10 text-${group.color}-300`
                      }
                      hover:bg-${group.color}-500/20 hover:border-${
                      group.color
                    }-500/40
                      hover:shadow-lg hover:shadow-${group.color}-500/10
                    `}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
