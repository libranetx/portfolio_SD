"use cliant";
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="conatiner-max py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:0 ml-5">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Tadios Tsegaye
            </h3>
            <br />
            <p className="text-muted-foreground ">
              Softwere & Web App Developer
            </p>
          </div>
          <div className="text-center md:text-right mr-5">
            <p className="text-muted-foreground mb-4">
              Let&apos;s connect and create something amazing together
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-9 pt-8 w-full">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center ">
          <p className="text-sm text-muted-foreground">© 2025 Tadios Tsegaye. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
