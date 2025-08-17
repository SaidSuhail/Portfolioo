import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Skill from "./Sections/Skill";
import BubbleCursor from "./Components/BubbleCursor";
import "boxicons/css/boxicons.min.css";
import Loader from "./Components/Loader";
function App() {
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate loading time (e.g., fetching)
    const timer = setTimeout(() => setLoading(false), 4000); // 3s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>;
  }
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
