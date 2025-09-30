"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../public/imge1.png"
import image2 from "../../public/image2.png"

export default function Home() {
  return (
    <div className="min-h-screen flex gradient-bg"> 
      {/* Center the entire section vertically and horizontally */}
      <section className="section-padding min-h-screen flex items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center w-full max-w-7xl mx-auto">
          
          {/* Left content column - centered */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg">
            <div className="space-y-8 w-full">
              <p className="font-mono text-lg uppercase tracking-wider text-gray-500">Hello i'm</p>
              <h1 className="text-7xl lg:text-8xl font-bold text-gray-200 leading-tight">
                Tadios
                <br />
                <span className="gradient-text">Tsegaye</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">Professional Softwere and web application devloper</p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I am a dedicated Software Developer and Web Application Developer 
              with a strong focus on creating scalable, 
              efficient, and user-centered digital solutions. 
              My work spans both front-end and back-end development, 
              enabling me to deliver complete applications 
              that are functional, secure, and visually engaging.
            </p>

            {/* Buttons - centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
              <Link href="/projects">
                <Button variant="outline">
                  My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                </Button>
              </Link>

              <Button variant="outline">
                Download CV
                <Download className="ml-2 h-4 w-4 "/>
              </Button>
            </div>

            {/* Social icons - centered on mobile, left-aligned on desktop */}
            <div className="flex items-center justify-center lg:justify-start space-x-9 pt-8 w-full">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24}/>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24}/>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24}/>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24}/>
              </a>
            </div>
          </div>

          {/* Right image column - centered */}
          <div className="flex justify-center items-center w-full">
            <div className="relative z-10 max-w-md lg:max-w-lg">
              <Image 
                src="/imge1.png"
                alt="Profile Picture" 
                width={600} 
                height={600} 
                className="rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}