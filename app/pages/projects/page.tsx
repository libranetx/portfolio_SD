"use client";

import { Image } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Tipo Calculator",
      company: "Open Source Project",
      year: "2024",
      description:
        "Advanced Java calculator with scientific functions, modern GUI, and unit conversion capabilities. Features intuitive design and responsive interface.",
      tags: ["Java", "Mathematics", "GUI", "Open Source"],
      category: "Desktop Application",
    },
    {
      title: "BMI Calculator Pro",
      company: "Health & Fitness",
      year: "2024",
      description:
        "Comprehensive Body Mass Index calculator with personalized health insights, progress tracking, and data visualization. Supports metric and imperial units.",
      tags: ["Java", "Health Tech", "Data Visualization", "Analytics"],
      category: "Health Application",
    },
    {
      title: "Developer Portfolio Platform",
      company: "Personal Project",
      year: "2024",
      description:
        "Modern, responsive portfolio website built with TypeScript and React. Features dark/light mode, project showcase, and smooth animations.",
      tags: ["TypeScript", "React", "Responsive Design", "UI/UX"],
      category: "Web Development",
    },

    {
      title: "Scorp Travel Blog",
      company: "Travel & Lifestyle",
      year: "2024",
      description:
        "Full-featured travel blogging platform with interactive maps, photo galleries, and social sharing. Built with modern TypeScript stack.",
      tags: ["TypeScript", "Travel", "Blogging", "Interactive Maps"],
      category: "Web Application",
    },
    {
      title: "FoodExpress Ordering System",
      company: "E-commerce",
      year: "2024",
      description:
        "Comprehensive online food ordering system with real-time tracking, multiple payment options, and restaurant management dashboard.",
      tags: ["JavaScript", "E-commerce", "Real-time", "Payment Integration"],
      category: "Web Application",
    },

    {
      title: "ShopEasy E-commerce",
      company: "Retail Technology",
      year: "2024",
      description:
        "Responsive e-commerce platform with product filtering, user reviews, and secure checkout process. Optimized for performance and SEO.",
      tags: ["HTML", "CSS", "E-commerce", "Responsive Design"],
      category: "Web Development",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <h1 className="section-title text-white">Selected Projects</h1>
              <p className="section-subtitle">
                A showcase of my recent work and achievements
              </p>
            </div>
            <div className="text-4xl lg:text-6xl font-bold text-muted-foreground font-mono">
              2021 - 2023
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-blur-xl border border-black/60  p-6 rounded-xl text-gray-400"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/30 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <Image className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-medium text-sm mb-3">
                    {project.company} • {project.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="btn-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" className="btn-secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-xl border border-black/20  p-6 rounded-xl text-gray-400 text-center">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-black/20 backdrop-blur-xl border border-black/20  p-6 rounded-xl text-gray-400  text-center">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-black/20 backdrop-blur-xl border border-black/20  p-6 rounded-xl text-gray-400  text-center">
              <div className="text-4xl font-bold text-accent mb-2">1+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
