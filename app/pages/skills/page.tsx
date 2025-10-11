import React from "react";
import {
  Code2,
  Palette,
  Camera,
  BarChart3,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const skill = () => {
  const skills = [
    {
      name: "Social Media",
      icon: <Code2 className="h-6 w-6" />,
      description: "Expert in social media strategy and content creation",
      level: 90,
    },
    {
      name: "Design",
      icon: <Palette className="h-6 w-6" />,
      description: "Professional graphic design and visual communication",
      level: 95,
    },
    {
      name: "Photography",
      icon: <Camera className="h-6 w-6" />,
      description: "Creative photography and visual storytelling",
      level: 85,
    },
    {
      name: "Data Analysis",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Data analysis and insights generation",
      level: 80,
    },
    {
      name: "Research",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Continuous learning and research",
      level: 88,
    },
    {
      name: "Creative Thinking",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Innovative problem solving and ideation",
      level: 92,
    },
  ];


    const additionalSkills = [
    "Creative Problem Solving",
    "Team Leadership",
    "Project Management",
    "Client Relations",
    "Strategic Planning",
    "Brand Development",
  ]
  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 text-muted-foreground">
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
            <h2 className="text-2xl font-bold text-gray-200 mb-8">Additional Competencies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Beyond technical skills, I bring strong leadership and strategic thinking capabilities to every project.</p>
          </div>


          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <div key={skill} className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground font-medium">
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
