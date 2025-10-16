import React from "react";
import Image from "next/image";
import {
  Code2,
  School,
  Palette,
  Zap,
  GraduationCap,
  Award,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen flex gradient-bg">
      <section className="section-padding container-max my-18">
        <div className="container-max mb-12">
          <div className="text-center mb-25">
            <h1 className="font-semibold section-title text-white">About Me</h1>
            <p className="mb-4 leading-relaxed text-muted-foreground text-xl">
              Passionate about creating meaningful digital experiences that
              connect with people
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 text-gray-400 gap-20">
              <div className="bg-black/80 backdrop-blur-xl border border-black/80  p-6 rounded-xl mx-3">
                <h2 className="text-white mb-5 text-3xl font-semibold mx-5">
                  My Story
                </h2>
                <p className="mb-7 mx-5 ">
                  I am a fourth-year Computer Science student at Hawassa
                  University with a strong passion for technology, innovation,
                  and problem-solving. Throughout my academic journey, I have
                  gained hands-on experience in web development, software
                  engineering, and database management, focusing on building
                  practical and efficient digital solutions.
                </p>
                <p className="mb-7 mx-5 ">
                  My interests lie in developing modern web applications,
                  creating intuitive user interfaces, and exploring emerging
                  technologies that enhance user experience and accessibility. I
                  am highly motivated to apply my technical knowledge to
                  real-world challenges and continuously improve my skills
                  through learning and collaboration.
                </p>
                <p className="mb-7 mx-5 ">
                  I aspire to contribute to projects that combine creativity and
                  technology, delivering impactful solutions that make a
                  difference in people’s lives.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-5 text-center">
                <div className="bg-black/80 backdrop-blur-xl border border-black/60  p-6 rounded-xl ">
                  <Code2 className="w-10 h-10 mb-4 mx-auto text-white" />
                  <h3 className="text-white text-xl">Development</h3>
                </div>
                <div className="bg-black/80 backdrop-blur-xl border border-black/60  p-6 rounded-xl ">
                  <Palette className="w-10 h-10 mb-4 mx-auto text-white" />
                  <h3 className="text-white text-xl">Design</h3>
                </div>
                <div className="bg-black/80 backdrop-blur-xl border border-black/60  p-6 rounded-xl ">
                  <Zap className="w-10 h-10 mb-4 mx-auto text-white" />
                  <h3 className="text-white text-xl">Innovation</h3>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-full">
              <div className="relative z-10 max-w-md lg:max-w-lg">
                <Image
                  src="/image2.png"
                  alt="Profile Picture"
                  width={800}
                  height={800}
                  className="rounded-2xl object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-32 mb-16">
            <h2 className="font-semibold section-title text-white">
              Education
            </h2>
            <p className="text-muted-foreground text-xl">
              My Acadimic journy in Computer Science and Software Enginering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-16  justify-items-center w-full max-w-7xl mx-auto">
            <div className="bg-black/70 backdrop-blur-xl border border-black/90  p-6 rounded-xl text-gray-400">
             <div className="text-gray-500 font-mono text-sm mb-2">2022</div>
              <School className="w-10 h-10 mb-4 mx-auto text-white" />
              <h2 className="text-xl text-gray-200 mb-3">High School</h2>
              <p>Assela Secondary School No. 1 - Natural Science</p>
            </div>

            <div className="bg-black/70 backdrop-blur-xl border border-black/60  p-6 rounded-xl text-gray-400">
            <div className="text-gray-500 font-mono text-sm mb-2">2026</div>
              <GraduationCap className="w-10 h-10 mb-4 mx-auto text-white" />
              <h1 className="text-xl text-gray-200 mb-3">Bachelor Degree</h1>
              <p>Hawassa University- Bachelor of Science in Computer Science</p>
            </div>

            <div className="bg-black/70 backdrop-blur-xl border border-black/60  p-6 rounded-xl text-gray-400">
            <div className="text-gray-500 font-mono text-sm mb-2">2027</div>
              <Award className="w-10 h-10 mb-4 mx-auto text-white" />
              <h2 className="text-xl text-gray-200 mb-3">Master Degree</h2>
              <p>Planing After graduation - In Software Enginering </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
