
"use cliant"
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../public/imge1.png"
import image2 from "../../public/image2.png"

export default function Home() {
  return (
        <div className="min-h-screen flex gradient-bg"> 
          <section className="section-padding min-h-screen flex items-center" >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 ml-10" > 
                <div className="space-y-8 ">
                  
                  <p className="font-mono text-lg uppercase tracking-wider text-gray-500">Hello i'm</p>
                  <h1 className="text-7xl lg:text-8xl font-bold text-gray-200 leading-tight">
                    Tadios
                    <br />
                    <span className="gradient-text">TSEGAYE</span>

                  </h1>

                  <p className="text-xl text-muted-foreground max-w-lg ">Professional Softwere and web application devloper </p>
                 
                </div>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">I am a dedicated Software Developer and Web Application Developer 
                  with a strong focus on creating scalable, 
                  efficient, and user-centered digital solutions. 
                  My work spans both front-end and back-end development, 
                  enabling me to deliver complete applications 
                  that are functional, secure, and visually engaging.</p>

                <div className="flex flex-col sm:flex-row gap-5">
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


                <div className="flex item-center space-x-9 pt-8 ml-10">
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

              <div className="relative">
                <div className="relative z-10">
                  <Image 
                    src="/imge1.png"
                    alt="Profile Picture" 
                    width={600} 
                    height={600} 
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
                
            
                
              </div>

            </div>
          </section>

        </div>
  );
}
