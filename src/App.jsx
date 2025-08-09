// import React,{ useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "./Sections/Hero";
// import About from "./Sections/About";
// import Projects from "./Sections/Projects";
// import Contact from "./Sections/Contact";
// import Skill from "./Sections/Skill";
// import BubbleCursor from "./Components/BubbleCursor";

// function App() {
//   return (
//     <>
//             <Navbar/>

//         <Routes>
//           {/* <Route path="/navbar" element={<Navbar />} /> */}
//           <Route path="/hero" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/skill" element={<Skill/>} />
//         </Routes>
//     </>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Skill from "./Sections/Skill";
import BubbleCursor from "./Components/BubbleCursor";
import "boxicons/css/boxicons.min.css";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="project" className="min-h-screen">
          <Projects />
        </section>
        <section id="skill" className="min-h-screen">
          <Skill />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      <BubbleCursor />
    </>
  );
}

export default App;
