
import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Globe,
  ArrowUpRight,
  ExternalLink,
  Star,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import * as THREE from "three";
import BabyBlissImg from "../assets/Gemini_Generated_Image_3rhp9l3rhp9l3rhp.png";
import PlantHubImg from "../assets/Gemini_Generated_Image_9nreaf9nreaf9nre.png";
import ChatBotImg from "../assets/Gemini_Generated_Image_t2ztoct2ztoct2zt.png";
import PortfolioImg from "../assets/Gemini_Generated_Image_163y5e163y5e163y.png";
import NetflixImg from "../assets/netflix-1652679757.jpg";


// Floating Particles Component using Three.js
function FloatingParticles() {
  const mountRef = useRef(null);

  React.useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 40;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Wrap around edges
        if (positions[i * 3] > 10) positions[i * 3] = -10;
        if (positions[i * 3] < -10) positions[i * 3] = 10;
        if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
        if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const carouselRef = useRef(null);

  // Enhanced project data
const projects = [
  {
    id: 1,
    title: "BabyBliss E-Commerce",
    subtitle: "BabyProducts Selling Platform",
    description:
      "A comprehensive React-based dashboard featuring real-time analytics, advanced inventory management, and seamless user experience.",
    image: BabyBlissImg,
    liveUrl: "https://your-project-live.com",
    githubUrl: "https://github.com/SaidSuhail/BabyBlissBackendAPI",
    technologies: ["React", "Entity", "Mssql", "Chart.js", "Jwt", "Razorpay"],
    status: "Live",
    year: "2024",
    stats: { stars: 124, contributors: 3 },
  },
  {
    id: 2,
    title: "PlantHub",
    subtitle: "Plant Managing Platform",
    description:
      "Subscription Based Plant Buying And Management Platform Aims To Promote PlantFarming",
    image: PlantHubImg,
    liveUrl: "https://plant-care-hub.vercel.app/",
    githubUrl: "https://github.com/SaidSuhail/PlantHubBackendMain",
    technologies: ["React", "Tailwindcss", "Entity", "SignalR", "Framer Motion"],
    status: "Live",
    year: "2024",
    stats: { stars: 89, contributors: 2 },
  },
  {
    id: 3,
    title: "ChatBot",
    subtitle: "Automated Chat Bot",
    description:
      "An intelligent auto-replying chatbot powered by OpenAI that can understand natural language, generate human-like responses, and engage in meaningful conversations.",
    image: ChatBotImg,
    liveUrl: "https://your-task-manager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Mssql", "Tailwind CSS", ".NET"],
    status: "Beta",
    year: "2024",
    stats: { stars: 156, contributors: 5 },
  },
  {
    id: 4,
    title: "Personal Portfolio",
    subtitle: "Interactive Design Showcase",
    description:
      "Award-winning portfolio website featuring cutting-edge animations, immersive 3D elements, and sophisticated user interactions.",
    image: PortfolioImg,
    liveUrl: "https://portfolioo-fawn-eight.vercel.app/",
    githubUrl: "https://github.com/SaidSuhail/Portfolioo",
    technologies: ["React", "Framer Motion", "Three.js", "GSAP", "Email.js"],
    status: "Live",
    year: "2023",
    stats: { stars: 203, contributors: 1 },
  },
  {
    id: 6,
    title: "Netflix Clone",
    subtitle: "Clone of Netflix Ui",
    description:
      "Professional cryptocurrency tracking platform with advanced charting, portfolio management, and market insights.",
    image: NetflixImg,
    liveUrl: "https://your-crypto-tracker.com",
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    technologies: ["React", "js", "css","Bootstrap"],
    status: "Live",
    year: "2024",
    stats: { stars: 92, contributors: 2 },
  },
];


  const cardsPerView = 1;
  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  // Removed auto-scroll - manual navigation only

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Three.js Floating Particles Background */}
      <FloatingParticles />

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-radial from-indigo-100/50 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-50/60 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/10 to-transparent">
          <div
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 dark:text-blue leading-tight tracking-tight">
                Featured <span className="font-medium">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-black-300 max-w-3xl mx-auto leading-relaxed">
                A curated collection of innovative solutions, creative
                experiments, and production-ready applications showcasing modern
                development practices and cutting-edge technologies.
              </p>
            </div>
          </div>
          {/* Project Carousel Container */}
          <div className="relative mb-16">
            {/* Navigation Frame with Arrows */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="group p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? "bg-blue-600 w-8"
                        : "bg-slate-300 hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="group p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
              >
                <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>

            {/* Projects Carousel */}
            <div className="overflow-hidden rounded-3xl">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    // className="flex-none w-1/4 px-3"
                    className="flex-none w-full sm:w-1/3 lg:w-1/4 px-3"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="group bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transform-gpu h-full">
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Live"
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                              : "bg-orange-100 text-orange-700 border border-orange-200"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Quick Actions Overlay */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${
                            hoveredProject === project.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm text-slate-900 p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm text-slate-900 p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-5">
                        {/* Project Meta */}
                        <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {project.stats.stars}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {project.stats.contributors}
                            </span>
                          </div>
                        </div>

                        {/* Title and Subtitle */}
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-blue-600 font-medium text-sm">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex gap-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
                          >
                            <Globe className="w-3 h-3" />
                            Demo
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
                            title="View Source"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/50 shadow-2xl shadow-slate-500/10 max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Ready to bring your
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    vision to life?
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  I'm passionate about creating exceptional digital experiences
                  and would love to collaborate on your next innovative project.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
                  View All Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and utilities */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 60px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle,
            var(--tw-gradient-from),
            var(--tw-gradient-to)
          );
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Projects;
