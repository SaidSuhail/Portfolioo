// import React, { useState, useEffect } from 'react';

// function Skill() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const frontendSkills = [
//     { name: 'React', icon: '⚛️' },
//     { name: 'Redux', icon: <i className="bx bxl-redux"></i> },
//     { name: 'JavaScript',icon: <i className="bx bxl-javascript"></i> },
//     { name: 'HTML', icon: '📄' },
//     { name: 'CSS', icon: '🎨' },
//     { name: 'Bootstrap', icon: '🅱️' },
//     { name: 'Tailwind CSS', icon: '💨' }
//   ];

//   const backendSkills = [
//     { name: 'C#', icon: '🔷' },
//     { name: 'ASP.NET Core Web API', icon: '🌐' },
//     { name: 'MVC', icon: '🏗️' },
//     { name: 'Entity Framework', icon: '🗄️' },
//     { name: 'LINQ', icon: '🔍' },
//     { name: 'ADO.NET', icon: '🔗' },
//     { name: 'SQL Server', icon: '🗃️' },
//     { name: 'SignalR', icon: '📡' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
     

//       <div className="relative z-10 container mx-auto px-6 py-16">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
//             Skills
//           </h1>
//           <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             Technologies I work with to build amazing applications
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Frontend Skills */}
//             <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
//               <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-center">
//                 Frontend Development
//               </h2>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                 {frontendSkills.map((skill, index) => (
//                   <div 
//                     key={skill.name}
//                     className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/50 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center"
//                     style={{transitionDelay: `${index * 100}ms`}}
//                   >
//                     <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                       {skill.icon}
//                     </div>
//                     <h3 className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
//                       {skill.name}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Backend Skills */}
//             <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
//               <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
//                 Backend Development
//               </h2>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                 {backendSkills.map((skill, index) => (
//                   <div 
//                     key={skill.name}
//                     className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center"
//                     style={{transitionDelay: `${index * 100}ms`}}
//                   >
//                     <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                       {skill.icon}
//                     </div>
//                     <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
//                       {skill.name}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Summary Stats */}
//         <div className={`mt-16 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
//               <div className="text-4xl font-black mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 {frontendSkills.length}
//               </div>
//               <div className="text-slate-300 font-medium">Frontend Technologies</div>
//             </div>
            
//             <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
//               <div className="text-4xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 {backendSkills.length}
//               </div>
//               <div className="text-slate-300 font-medium">Backend Technologies</div>
//             </div>
            
//             <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
//               <div className="text-4xl font-black mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
//                 3+
//               </div>
//               <div className="text-slate-300 font-medium">Years Experience</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skill;

import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Globe, Layout, Zap, Star, TrendingUp, Award, Target, Sparkles, ArrowUpRight } from 'lucide-react';
import ReactLogo from "../assets/React.svg.png";
import ReduxLogo from "../assets/Redux.png";
import HtmlLogo from "../assets/Html.jpg";
import CssLogo from "../assets/css.png";
import TailwindCssLogo from "../assets/Tailwindcss.png";
import CsharpLogo from "../assets/csharps.png";
import EntityLogo from "../assets/EntityFrame.png";
import SqlLogo from "../assets/Mssql.svg";
import DapperLogo from "../assets/Dapper1.png";
import SignallLogo from "../assets/Signalr.png";
function Skill() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SVG Icons for each technology
  const TechIcons = {
    // 
    React: () => (
  <img 
    src={ReactLogo} 
    alt="React Logo" 
    className="w-6 h-6 object-contain" 
  />
),
    JavaScript: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.11-.403.602-.523.958-.382.29.091.559.313.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-.999l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.484-.884.449-1.173.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.001-.042z"/>
      </svg>
    ),

     Redux: () => (
  <img 
    src={ReduxLogo} 
    alt="Redux Logo" 
    className="w-6 h-6 object-contain" 
  />
),
HTML5: () => (
  <img 
    src={HtmlLogo} 
    alt="Html Logo" 
    className="w-6 h-6 object-contain" 
  />
),
CSS: () => (
  <img 
    src={CssLogo} 
    alt="css Logo" 
    className="w-6 h-6 object-contain" 
  />
),
Tailwind: () => (
  <img 
    src={TailwindCssLogo} 
    alt="Tailwind Logo" 
    className="w-6 h-6 object-contain" 
  />
),
csharp: () => (
  <img 
    src={CsharpLogo} 
    alt="c# Logo" 
    className="w-6 h-6 object-contain" 
  />
),
EF: () => (
  <img 
    src={EntityLogo} 
    alt="c# Logo" 
    className="w-12 h-12 rounded-xl object-contain" 
  />
),
SQLServer: () => (
  <img 
    src={SqlLogo} 
    alt="c# Logo" 
    className="w-7 h-7 object-contain" 
  />
),
Dapper: () => (
  <img 
    src={DapperLogo} 
    alt="c# Logo" 
    className="w-7 h-7 object-contain" 
  />
),
SignalR: () => (
  <img 
    src={SignallLogo} 
    alt="c# Logo" 
    className="w-7 h-7 object-contain" 
  />
),
    'ASP.NET Core': () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372z"/>
      </svg>
    ),
    'C#': () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12c.93 0 1.807.22 2.633.659l-.69 1.342c-.66-.33-1.35-.495-2.064-.495-.495 0-.93.12-1.305.36-.375.24-.562.57-.562.99 0 .3.098.547.293.742.196.195.51.39.942.585.63.285 1.139.54 1.528.764.389.225.742.54.982.945.24.405.36.915.36 1.53 0 .78-.285 1.44-.855 1.98s-1.32.81-2.25.81c-.81 0-1.65-.195-2.52-.585l.75-1.38c.63.33 1.29.495 1.98.495.54 0 .975-.12 1.305-.36s.495-.57.495-.99c0-.33-.105-.6-.315-.81s-.6-.435-1.155-.675c-.555-.24-1.005-.48-1.35-.72s-.622-.54-.825-.9-.304-.81-.304-1.35c0-.72.27-1.335.81-1.845s1.245-.765 2.115-.765z"/>
      </svg>
    ),
  };

  const getIcon = (skillName) => {
    if (TechIcons[skillName]) {
      return TechIcons[skillName]();
    }
    return <Code size={20} />;
  };

  const frontendSkills = [
    { name: 'React', category: 'frontend', proficiency: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', category: 'frontend', proficiency: 92, color: 'from-yellow-500 to-orange-500' },
    { name: 'Redux', category: 'frontend', proficiency: 82, color: 'from-purple-600 to-violet-600' },
    { name: 'HTML5', category: 'frontend', proficiency: 98, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', category: 'frontend', proficiency: 90, color: 'from-blue-500 to-purple-500' },
    { name: 'Tailwind', category: 'frontend', proficiency: 95, color: 'from-teal-500 to-cyan-500' }
  ];

  const backendSkills = [
    { name: 'csharp', category: 'backend', proficiency: 93, color: 'from-white-600 to-indigo-300' },
    { name: 'ASP.NET Core', category: 'backend', proficiency: 90, color: 'from-blue-600 to-purple-600' },
    { name: 'EF', category: 'backend', proficiency: 87, color: 'from-white-600 to-purple-400' },
    { name: 'SQLServer', category: 'backend', proficiency: 85, color: 'from-white-600 to-red-200' },
    { name: 'Dapper', category: 'backend', proficiency: 83, color: 'from-blue-800 to-blue-600' },
    { name: 'SignalR', category: 'backend', proficiency: 78, color: 'from-green-500 to-emerald-500' }
  ];

  const allSkills = [...frontendSkills, ...backendSkills];
  
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills', icon: Globe, count: allSkills.length },
    { id: 'frontend', label: 'Frontend', icon: Layout, count: frontendSkills.length },
    { id: 'backend', label: 'Backend', icon: Server, count: backendSkills.length }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
       
<div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
 <h1 className="text-6xl mt-5 md:text-7xl font-light mb-6 text-gray-900 dark:text-blue tracking-tight">
   Technical <span className="font-medium">Skills</span>
 </h1>
 <p className="text-xl md:text-2xl text-black-100 dark:text-black-300 max-w-3xl mx-auto leading-relaxed">
   A comprehensive overview of technologies and tools I use to build exceptional digital experiences
 </p>
</div>
       

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 border border-gray-200/50'
                }`}
              >
                <category.icon size={20} className="mr-2" />
                {category.label}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Simplified */}
        <div className={`mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
          <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <div 
                key={`${skill.name}-${activeCategory}`}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer text-center"
                style={{transitionDelay: `${index * 50}ms`}}
              >
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {getIcon(skill.name)}
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Proficiency */}
                <div className="text-xs text-gray-600 font-medium mb-2">
                  {skill.proficiency}%
                </div>

                {/* Simple Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: mounted ? `${skill.proficiency}%` : '0%',
                      transitionDelay: `${index * 100 + 800}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Summary */}
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '800ms'}}>
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap size={28} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Full-Stack Expertise
            </h3>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With All  technologies  Mentioned Here and {Math.round(allSkills.reduce((acc, skill) => acc + skill.proficiency, 0) / allSkills.length)}% average proficiency, 
              I bring comprehensive expertise across the entire development stack. From crafting pixel-perfect user interfaces 
              to architecting scalable backend systems, I'm equipped to handle complex, end-to-end solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-emerald-600 mb-2">Frontend</div>
                <div className="text-sm text-gray-600">Modern UI/UX</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600 mb-2">Backend</div>
                <div className="text-sm text-gray-600">Scalable APIs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-600 mb-2">Database</div>
                <div className="text-sm text-gray-600">Data Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-orange-600 mb-2">DevOps</div>
                <div className="text-sm text-gray-600">Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Skill;