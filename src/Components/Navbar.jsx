// import React, { useState } from "react";
// import { Menu, X, Home, User, Briefcase, Award, Mail } from "lucide-react";
// import BubbleCursor from "./BubbleCursor";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//  const navItems = [
//   { name: "Home", icon: Home, path: "#hero" },
//   { name: "About", icon: User, path: "#about" },
//   { name: "Projects", icon: Briefcase, path: "#project" },
//   { name: "Skills", icon: Award, path: "#skill" },
//   { name: "Contact", icon: Mail, path: "#contact" },
// ];


//   const handleNavigation = (path) => {
//     window.location.href = path;
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       id="navbar-area"
//       className="relative z-50 rounded-3xl   top-0 left-0 right-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900backdrop-blur-md border-b border-gray-200/50 shadow-sm"
//     >
//       <BubbleCursor />{" "}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}

//           <div className="relative flex-shrink-0">
//             {/* Subtle background shade */}
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-transparent rounded-md" />

//             {/* Text content */}
//             <div className="relative px-2 py-1">
//               <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
//                 Portfolio
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}

//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-center space-x-6">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavigation(item.path)}
//                   className="relative px-4 py-2 font-medium"
//                 >
//                   <span className="masked-text" data-text={item.name}>
//                     {item.name}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 backdrop-blur-sm rounded-b-lg border-t border-gray-200/50">
//               {navItems.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <button
//                     key={item.name}
//                     onClick={() => handleNavigation(item.path)}
//                     className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 w-full text-left"
//                   >
//                     <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
//                     <span className="flex gap-[1px]">
//                       {item.name.split("").map((char, i) => (
//                         <span
//                           key={i}
//                           className="transition duration-200 ease-out hover:text-blue-600 hover:scale-125"
//                         >
//                           {char}
//                         </span>
//                       ))}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Menu, X, Home, User, Briefcase, Award, Mail } from "lucide-react";
import BubbleCursor from "./BubbleCursor";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, path: "#hero" },
    { name: "About", icon: User, path: "#about" },
    { name: "Projects", icon: Briefcase, path: "#project" },
    { name: "Skills", icon: Award, path: "#skill" },
    { name: "Contact", icon: Mail, path: "#contact" },
  ];

  const handleNavigation = (path) => {
    document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="navbar-area"
      className="fixed top-4 left-4 right-4 z-50 rounded-3xl shadow-lg 
                 bg-gradient-to-br from-white/80 via-gray-100 to-white/80 
                 backdrop-blur-md border border-gray-300/50 overflow-hidden"
    >
      <BubbleCursor />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-transparent rounded-md" />
            <div className="relative px-2 py-1">
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="masked-text" data-text={item.name}>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className=" mt-5 px-2 pt-6 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-b-3xl border-t border-gray-200/50">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 w-full text-left"
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="flex gap-[1px]">
                      {item.name.split("").map((char, i) => (
                        <span
                          key={i}
                          className="transition duration-200 ease-out hover:text-blue-600 hover:scale-125"
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
