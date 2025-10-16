import React from "react";
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Cpu,
  GitBranch,
  ShieldCheck,
  Layers,
} from "lucide-react";

const skill = () => {
  const skills = [
    {
      name: "Full-Stack Development",
      icon: <Layers className="h-6 w-6" />,
      description:
        "Building complete web applications using modern frontend and backend technologies.",
      level: 90,
    },
    {
      name: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      description:
        "Creating responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS.",
      level: 92,
    },
    {
      name: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      description:
        "Designing and managing APIs, databases, and server-side logic with Node.js and Prisma.",
      level: 88,
    },
    {
      name: "App Development",
      icon: <Smartphone className="h-6 w-6" />,
      description:
        "Developing Android applications using Java, Kotlin, and cross-platform tools like React Native.",
      level: 85,
    },
    {
      name: "Problem Solving",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "Strong foundation in algorithms, data structures, and logical reasoning for efficient coding.",
      level: 90,
    },
    {
      name: "Version Control & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      description:
        "Experienced with Git, GitHub, and collaborative workflows for software development.",
      level: 87,
    },
    {
      name: "Security & Authentication",
      icon: <ShieldCheck className="h-6 w-6" />,
      description:
        "Implementing secure authentication and authorization systems using JWT and NextAuth.js.",
      level: 84,
    },
    {
      name: "API Integration",
      icon: <Code2 className="h-6 w-6" />,
      description:
        "Connecting frontend and backend systems with RESTful and GraphQL APIs.",
      level: 89,
    },
  ];

const additionalSkills = [
  "Agile Development & Scrum",
  "UI/UX Design Principles",
  "Database Design & Optimization",
  "API Development & Integration",
  "Debugging & Performance Tuning",
  "Version Control (Git & GitHub)",
  "Collaboration & Communication",
  "Problem Solving & Critical Thinking",
  "Continuous Learning & Research",
  "Cloud Deployment (Vercel, Firebase, AWS)",
];
  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center my-18 text-muted-foreground">
            <h1 className="section-title text-white">Skills & Expertise</h1>
            <p className="sectio-subtitle mx-auto text-xl">
              A comprehensive skill set built through years of experience and
              continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-black/40 backdrop-blur-xl border border-black/60  p-6 rounded-xl text-white "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-white">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {" "}
                    {skill.name}
                  </h3>
                </div>
                <p className=" mb-4 leading-relaxed text-muted-foreground text-xl">
                  {skill.description}
                </p>
              </div>
            ))}

            <div></div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-black/60  p-6 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-200 mb-8">
                Additional Competencies
              </h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Beyond technical skills, I bring strong leadership and strategic
                thinking capabilities to every project.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default skill;
