import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Star,
  MapPin,
  Calendar,
  Award,
  Target,
  Lightbulb,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle,
  GraduationCapIcon,
} from "lucide-react";
import UniversityImage from "../assets/University.png";
import RissTechnologies from "../assets/RissTechnologies.jpg";
import Bridgeon from "../assets/Brigeon.jpeg";
function About() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Tech Innovator",
    "Problem Solver",
  ];

  const journeySteps = [
    {
      title: "Calicut University",
      subtitle: "Bsc ComputerScience",
      subtitlecolor: "from-blue-500 to-blue-500",
      description:
        "Started my journey in Computer Science, learning the fundamentals and discovering my passion for technology. Built a strong foundation in programming concepts and software development principles.",
      icon: () => (
        <img
          src={UniversityImage}
          alt="University"
          className="w-9 h-9 object-contain"
        />
      ),
      color: "from-white-500 to-white-300",
      year: "2020-2023",
      achievements: [
        "Computer Science Fundamentals",
        "Programming Languages",
        "Software Development",
      ],
    },
    {
      title: "Riss TechNologies",
      subtitle: "First Professional Experience",
      subtitlecolor: "from-blue-500 to-blue-500",
      description:
        "Joined as a Project Intern, worked on College project and honed my skills in modern web technologies. Gained practical experience in real-world development scenarios.",
      icon: () => (
        <img
          src={RissTechnologies}
          alt="Riss Technology"
          className="w-9 h-9 object-contain"
        />
      ),
      color: "from-white-500 to-white-500",
      year: "2023",
      achievements: [
        "Project Development",
        "Team Collaboration",
        "Modern Web Technologies",
      ],
    },
    {
      title: "Bridgeon Solutions",
      subtitle: "FullStack Dotnet Developer",
      subtitlecolor: "from-blue-500 to-blue-500",
      description:
        "Leading development initiatives, mentoring team members, and building scalable solutions for complex business challenges. Driving innovation and excellence in software delivery.",
      icon: () => (
        <img
          src={Bridgeon}
          alt="University"
          className="w-9 h-9 object-contain"
        />
      ),
      color: "from-white-500 to-white-500",
      year: "2024-Present",
      achievements: [
        "Team Leadership",
        "Scalable Architecture",
        "Business Solutions",
      ],
    },
  ];

  const stats = [
    {
      icon: Code2,
      label: "Projects Delivered",
      value: "5+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "1+",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      label: "Success Rate",
      value: "97%",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const skills = [
    "React js",
    "Redux",
    ".NET Core",
    "Figma",
    "SQL",
    "Cloud Technologies",
    "System Architecture",
    "Team Leadership",
  ];

  useEffect(() => {
    setMounted(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const journeyInterval = setInterval(() => {
      setActiveJourney((prev) => (prev + 1) % journeySteps.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(journeyInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
       
<div className={`text-center mb-20 transition-all duration-700 ${
  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
}`}>
  <div className="mb-8">
    <h1 className="text-6xl mt-5 md:text-7xl font-light mb-6 text-gray-900 dark:text-Blue tracking-tight">
      About <span className="font-medium">Me</span>
    </h1>
    
    <div className="text-xl md:text-2xl text-gray-600 dark:text-blue-600 h-8 flex items-center justify-center">
      <span className="transition-all duration-500 font-medium">
        {roles[currentRole]}
      </span>
    </div>
    
    {/* Simple elegant line */}
    <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto mt-6"></div>
  </div>
</div>
        {/* Stats Section */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50"
              >
                <div
                  className={`w-15 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-md`}
                >
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brief Introduction */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                Brief Introduction
              </h2> */}
             <h4 className="text-5xl mt-5 md:text-5xl font-light mb-6 text-gray-900 dark:text-black-400 tracking-tight text-center">
  Brief <span className="font-medium">Intro</span>
</h4>

              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center px-3">
  I'm a passionate{" "}
  <span className="bg-gradient-to-r text-black bg-clip-text  font-bold">
    Software Engineer
  </span>{" "}
  with a deep love for creating innovative digital solutions. My journey began
  in college where I discovered the power of code to transform ideas into
  reality.
</p>

<p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center px-3">
  From building my first "Hello World" program to architecting complex systems
  at{" "}
  <span className=" decoration-purple-500 font-bold text-purblackple-600">
    Bridgeon Solutions
  </span>
  , I've consistently pushed boundaries and embraced challenges. I believe in
  writing clean, efficient code that not only works but makes a difference.
</p>

              {/* <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                I'm a passionate{" "}
                <span className="text-blue-600 font-bold">
                  Software Engineer
                </span>{" "}
                with a deep love for creating innovative digital solutions. My
                journey began in college where I discovered the power of code to
                transform ideas into reality.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                From building my first "Hello World" program to architecting
                complex systems at{" "}
                <span className="text-purple-600 font-bold">
                  Bridgeon Solutions
                </span>
                , I've consistently pushed boundaries and embraced challenges. I
                believe in writing clean, efficient code that not only works but
                makes a difference.
              </p> */}

              {/* Skills Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 font-medium rounded-full border border-gray-200 hover:from-blue-200 hover:to-purple-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="font-medium">Kerala, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-purple-600" />
                  <span className="font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section with Left-Right Layout */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-gray-900 dark:text-blue tracking-tight">
 My <span className="font-medium">Journey</span>
</h2>

          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content Side */}
                <div className="flex-1 mb-8 md:mb-0">
                  <div
                    className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      index % 2 === 1 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mr-4`}
                      >
                        <step.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-500 mb-1">
                          {step.year}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-800">
                          {step.title}
                        </h3>
                        <p
                          className={`text-lg font-semibold bg-gradient-to-r ${step.subtitlecolor} bg-clip-text text-transparent`}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {step.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {step.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center"
                          >
                            <CheckCircle
                              size={16}
                              className="text-green-500 mr-3 flex-shrink-0"
                            />
                            <span className="text-gray-700 font-medium">
                              {achievement}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}

                <div className="flex-1 flex justify-center">
                  <div
                    className={`w-64 h-64 rounded-3xl bg-white flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2`}
                  >
                    <div className="mb-4">
                      <step.icon className="w-20 h-20 mx-auto" />{" "}
                    </div>
                    <div className="text-2xl font-black text-gray-800">
                      {step.year}
                    </div>
                    <div className="text-lg font-medium text-gray-600">
                      {step.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div
          className={`text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Let's connect and create something
              extraordinary!
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
              Get In Touch
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div> */}
        <div
 className={`text-center transition-all duration-700 ${
   mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
 }`}
 style={{ transitionDelay: "600ms" }}
>
 <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl">
   <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
     Let's Build Something <span className="font-medium">Amazing</span> Together
   </h3>
   <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
     I'm always excited to take on new challenges and collaborate on
     innovative projects. Let's connect and create something
     extraordinary!
   </p>
  <button 
  onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }}
  className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100"
>
  Get In Touch
  <ArrowRight size={20} className="ml-2" />
</button>
 </div>
</div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse cursor-pointer">
          <Star size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default About;
