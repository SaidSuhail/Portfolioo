// import React, { useState, useEffect, useRef } from 'react'

// // Material-UI inspired components with Tailwind
// const Button = ({ children, variant = 'contained', className = '', onClick, ...props }) => {
//   const baseClass = variant === 'outlined'
//     ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
//     : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'

//   return (
//     <button
//       className={`px-8 py-4 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${baseClass} ${className}`}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// const Typography = ({ variant = 'body1', children, className = '', ...props }) => {
//   const variants = {
//     h1: 'text-6xl md:text-8xl font-bold',
//     h2: 'text-3xl md:text-5xl font-bold',
//     h4: 'text-2xl md:text-3xl font-semibold',
//     subtitle1: 'text-xl md:text-2xl',
//     body1: 'text-lg',
//   }

//   const Tag = variant.startsWith('h') ? variant : 'div'

//   return React.createElement(Tag, {
//     className: `${variants[variant]} ${className}`,
//     ...props
//   }, children)
// }

// const Chip = ({ label, className = '' }) => (
//   <span className={`inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium rounded-full backdrop-blur-sm hover:bg-blue-600/30 transition-all duration-200 ${className}`}>
//     {label}
//   </span>
// )

// // CSS-based 3D animated background
// const AnimatedBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Floating geometric shapes */}
//       <div className="absolute top-20 left-10 w-20 h-20  bg-blue-500/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
//       <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rotate-12 animate-pulse" style={{animationDuration: '3s'}}></div>
//       <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
//       <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>

//       {/* Floating particles */}
//       {[...Array(50)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${2 + Math.random() * 3}s`
//           }}
//         ></div>
//       ))}

//       {/* Moving gradient orbs */}
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
//     </div>
//   )
// }

// // GSAP-like animation hook simulation
// const useGSAPAnimation = () => {
//   const [isAnimated, setIsAnimated] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsAnimated(true), 100)
//     return () => clearTimeout(timer)
//   }, [])

//   return isAnimated
// }

// function Hero() {
//   const [mounted, setMounted] = useState(false)
//   const [currentTech, setCurrentTech] = useState(0)
//   const isAnimated = useGSAPAnimation()

//   const technologies = [
//     ".NET Core",
//     "React.js",
//     "MSSQL Server",
//     "Redux",
//     "SignalR",
//     "Javascript",
//     "Tailwind css",
//     "Entity Framework",
//     "Ado Dotnet",
//     "Linq",
//     "C#",
//     "Dapper"
//   ]

//   const skills = [
//     "Backend APIs", "Frontend UI/UX", "Database Design", "Cloud Architecture",
//     "DevOps", "System Integration", "Performance Optimization", "Security"
//   ]

//   useEffect(() => {
//     setMounted(true)

//     // Tech rotation
//     const techInterval = setInterval(() => {
//       setCurrentTech(prev => (prev + 1) % technologies.length)
//     }, 2500)

//     return () => clearInterval(techInterval)
//   }, [])

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
//       {/* Animated Background */}
//       <AnimatedBackground />

//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/60 z-10"></div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 opacity-10 z-10" style={{
//         backgroundImage: `
//           linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//         `,
//         backgroundSize: '50px 50px'
//       }}></div>

//       {/* Main Content */}
//       <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
//         <div className="max-w-6xl mx-auto text-center">

//           {/* Main Name */}
//           <div className={`mb-8 transform transition-all duration-1000 ease-out ${
//             isAnimated ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'
//           }`}>
//             <Typography
//               variant="h1"
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4 font-black tracking-tight"
//             >
//               Saidsuhail VP
//             </Typography>
//             <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
//           </div>

//           {/* Professional Title */}
//           <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
//             isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <Typography
//               variant="h2"
//               className="text-white mb-6 font-bold"
//             >
//               Fullstack .NET Developer
//             </Typography>

//             {/* Rotating Tech Stack */}
//             <div className="mb-8">
//               <Typography
//                 variant="subtitle1"
//                 className="text-gray-300 mb-4"
//               >
//                 Specializing in
//               </Typography>
//               <div className="h-12 flex items-center justify-center">
//                 <span
//                   key={currentTech}
//                   className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
//                 >
//                   {technologies[currentTech]}
//                 </span>
//               </div>
//             </div>

//             {/* Professional Description */}
//             <Typography
//               variant="body1"
//               className="text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
//             >
//               Building robust, scalable applications from database to deployment.
//               Passionate about creating seamless user experiences with cutting-edge
//               technology and enterprise-grade architecture solutions.
//             </Typography>
//           </div>

//           {/* Skills Chips */}
//           <div className={`mb-12 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
//             isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {skills.map((skill, index) => (
//               <Chip
//                 key={skill}
//                 label={skill}
//                 className="transform hover:scale-105 transition-transform duration-200"
//               />
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-700 ${
//             isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <Button
//               variant="contained"
//               className="min-w-48 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
//             >
//               <span className="flex items-center gap-2">
//                 <span>View Projects</span>
//                 <span className="text-xl">→</span>
//               </span>
//             </Button>

//             <Button
//               variant="outlined"
//               className="min-w-48 hover:shadow-lg hover:shadow-blue-500/20"
//             >
//               <span className="flex items-center gap-2">
//                 <span>Download Resume</span>
//                 <span className="text-xl">↓</span>
//               </span>
//             </Button>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="flex flex-col items-center text-gray-400">
//               <span className="text-sm mb-2">Scroll to explore</span>
//               <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//                 <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React, { useState, useEffect, useRef } from "react";
import DeveloperCard from "../Components/DeveloperCard";

// Material-UI inspired components with Tailwind (Light Theme)
const Button = ({
  children,
  variant = "contained",
  className = "",
  onClick,
  ...props
}) => {
  const baseClass =
    variant === "outlined"
      ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700";

  return (
    <button
      className={`px-8 py-4 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${baseClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Typography = ({
  variant = "body1",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    h1: "text-5xl md:text-7xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h4: "text-2xl md:text-3xl font-semibold",
    subtitle1: "text-xl md:text-2xl",
    body1: "text-lg",
  };

  const Tag = variant.startsWith("h") ? variant : "div";

  return React.createElement(
    Tag,
    {
      className: `${variants[variant]} ${className}`,
      ...props,
    },
    children
  );
};

const Chip = ({ label, className = "" }) => (
  <span
    className={`inline-block px-4 py-2 bg-blue-100 border border-blue-200 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-all duration-200 ${className}`}
  >
    {label}
  </span>
);

// Light animated background
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-lg rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-indigo-200/30 rotate-12 animate-pulse"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-cyan-200/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></div>
      ))}

      {/* Moving gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-300/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-300/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      ></div>
    </div>
  );
};

// Developer coding illustration
const DeveloperIllustration = () => {
  const [animatedLines, setAnimatedLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLines((prev) => (prev + 1) % 6);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Developer figure */}
      <div className="relative">
        {/* Head */}
        <div className="w-16 h-16 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full mx-auto mb-2 border-2 border-orange-400"></div>

        {/* Body */}
        <div className="w-20 h-24 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-lg mx-auto relative">
          {/* Arms */}
          <div className="absolute -left-6 top-4 w-12 h-4 bg-blue-600 rounded-full transform -rotate-12"></div>
          <div className="absolute -right-6 top-4 w-12 h-4 bg-blue-600 rounded-full transform rotate-12"></div>
        </div>

        {/* Laptop */}
        <div className="relative mt-4">
          {/* Laptop base */}
          <div className="w-32 h-20 bg-gray-800 rounded-lg relative mx-auto">
            {/* Screen */}
            <div className="w-28 h-16 bg-gray-900 rounded-t-lg mx-auto relative overflow-hidden">
              {/* Code lines */}
              <div className="p-2 space-y-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded transition-all duration-300 ${
                      i <= animatedLines
                        ? "bg-green-400 opacity-100"
                        : "bg-gray-600 opacity-40"
                    }`}
                    style={{
                      width: `${Math.random() * 60 + 40}%`,
                      marginLeft: `${i % 2 === 0 ? 0 : 10}px`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Cursor blink */}
              <div className="absolute bottom-2 left-4 w-px h-2 bg-green-400 animate-pulse"></div>
            </div>

            {/* Keyboard */}
            <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-700 rounded grid grid-cols-8 gap-px p-px">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-600 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Typing hands */}
          <div className="absolute -bottom-4 left-8 w-4 h-6 bg-orange-300 rounded-full transform rotate-12 animate-pulse"></div>
          <div
            className="absolute -bottom-4 right-8 w-4 h-6 bg-orange-300 rounded-full transform -rotate-12 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Code floating elements */}
        <div className="absolute -top-8 -left-8 text-xs font-mono text-blue-600 opacity-60 animate-bounce">
          &lt;div&gt;
        </div>
        <div
          className="absolute -top-4 right-8 text-xs font-mono text-indigo-600 opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          {}
        </div>
        <div
          className="absolute bottom-8 -right-12 text-xs font-mono text-blue-600 opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          React
        </div>
        <div
          className="absolute top-16 -left-12 text-xs font-mono text-indigo-600 opacity-60 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          CSS
        </div>
      </div>
    </div>
  );
};

// Animation hook
const useGSAPAnimation = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return isAnimated;
};

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const isAnimated = useGSAPAnimation();

  const technologies = [
    ".NET Core",
    "React.js",
    "MSSQL Server",
    "Redux",
    "SignalR",
    "Javascript",
    "Tailwind CSS",
    "Entity Framework",
    "ADO.NET",
    "LINQ",
    "C#",
    "Dapper",
  ];

  const skills = [
    "Backend APIs",
    "Frontend UI/UX",
    "Database Design",
    "Stored Procedure",
    "DevOps",
    "System Integration",
    "Performance Optimization",
    "Security",
  ];

  useEffect(() => {
    setMounted(true);

    // Tech rotation
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2500);

    return () => clearInterval(techInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 z-10"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            {/* Left Side - Content */}

            <div className="text-left w-full lg:w-1/2 lg:pt-16">
              <div
                className={`mb-4 transform transition-all duration-700 ease-out ${
                  isAnimated
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <Typography
                  variant="subtitle1"
                  className="text-gray-500 mb-2 font-medium text-sm"
                >
                  Hi There!{" "}
                  <span className="inline-block animate-wave">👋</span> I'm
                </Typography>
              </div>

              {/* Main Name */}
              <div
                className={`mb-6 transform transition-all duration-700 delay-150 ease-out ${
                  isAnimated
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <Typography
                  variant="h1"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl"
                >
                  SAIDSUHAIL VP
                </Typography>
                <div className="h-0.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>

              {/* Professional Title */}
              <div
                className={`mb-6 transform transition-all duration-700 delay-300 ${
                  isAnimated
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <Typography
                  variant="h2"
                  className="text-gray-800 mb-4 font-semibold text-xl md:text-2xl"
                >
                  Fullstack .NET Developer
                </Typography>

                {/* Rotating Tech Stack */}
                <div className="mb-4">
                  <Typography
                    variant="body2"
                    className="text-gray-600 mb-2 text-sm"
                  >
                    Specializing in
                  </Typography>
                  <div className="h-6 flex items-center">
                    <span
                      key={currentTech}
                      className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    >
                      {technologies[currentTech]}
                    </span>
                  </div>
                </div>

                {/* Professional Description */}
                <Typography
                  variant="body2"
                  className="text-gray-600 leading-relaxed mb-6 max-w-md text-sm"
                >
                  Building robust, scalable applications from database to
                  deployment. Passionate about creating seamless user
                  experiences with modern technology.
                </Typography>
              </div>

              {/* Skills Chips */}
              <div
                className={`mb-6 flex flex-wrap gap-2 max-w-md transform transition-all duration-700 delay-450 ${
                  isAnimated
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {skills.slice(0, 5).map((skill, index) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    className="transform hover:scale-105 transition-transform duration-200 text-xs"
                  />
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-row gap-3 transform transition-all duration-700 delay-600 ${
                  isAnimated
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <Button
                  variant="contained"
                  size="small"
                  className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 px-4 py-2"
                  onClick={() => {
                    const section = document.getElementById("project");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="flex items-center gap-1.5 text-sm">
                    <span>View Projects</span>
                    <span className="text-base">→</span>
                  </span>
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  className="hover:shadow-md hover:shadow-blue-500/10 px-4 py-2"
                >
                  <a href="src/assets/saidsuhailvp (5).pdf" download>
                    <span className="flex items-center gap-1.5 text-sm">
                      <span>Resume</span>
                      <span className="text-base">↓</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
            {/* Right Side - Developer Illustration */}

            <div
              className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-1000 ${
                isAnimated
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* 🧩 Your animated developer image and floating tags */}
              <DeveloperCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
