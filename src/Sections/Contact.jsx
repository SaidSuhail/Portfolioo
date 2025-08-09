// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
// import emailjs from '@emailjs/browser';

// const SERVICE_ID = "service_bsl7j6c";
// const TEMPLATE_ID = "template_aak97lg";
// const PUBLIC_KEY = "aZkGoAgRNB748L-xt";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");
//     setLoading(true);

//     // small client-side validation (optional)
//     if (!formData.name || !formData.email || !formData.message) {
//       setErrorMsg("Please fill at least name, email and message.");
//       setLoading(false);
//       return;
//     }

//     try {
//       await emailjs.send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         PUBLIC_KEY
//       );

//       setSuccess(true);
//       setFormData({ name: "", email: "", subject: "", message: "" });

//       // dismiss success after 4s
//       setTimeout(() => setSuccess(false), 4000);
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setErrorMsg("Failed to send message. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//           {/* Left Side - Contact Form */}
//           <div className="space-y-8">
//             {/* Header */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
//                 Get In Touch
//               </h1>
//               <p className="text-gray-300 text-lg">
//                 Have a project in mind? Let's discuss how we can work together.
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 text-gray-300">
//                 <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                   <Mail className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <span>suhailsaid689@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-300">
//                 <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                   <Phone className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <span>+91 8848678300</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-300">
//                 <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                   <MapPin className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <span>Kerala, India</span>
//               </div>
//             </div>
//             {success && (
//               <div className="p-3 rounded-lg bg-green-600 text-white">
//                 ✅ Message sent! I will contact you soon.
//               </div>
//             )}
//             {errorMsg && (
//               <div className="p-3 rounded-lg bg-red-600 text-white">
//                 ❌ {errorMsg}
//               </div>
//             )}
//             {/* Contact Form */}
//             <div className="space-y-6 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/10 border border-white/20 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
//                   />
//                 </div>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/10 border border-white/20 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
//                   />
//                 </div>
//               </div>

//               <div className="relative">
//                 <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-white/10 border border-white/20 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
//                 />
//               </div>

//               <div className="relative">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="5"
//                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
//                 ></textarea>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Animated Illustration */}
//           <div className="hidden lg:flex items-center justify-center">
//             <div className="relative w-96 h-96">
//               {/* Floating Elements */}
//               <div className="absolute inset-0">
//                 {/* Main Circle */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full animate-pulse"></div>

//                 {/* Floating Icons */}
//                 <div className="absolute top-8 left-8 w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center animate-bounce">
//                   <Mail className="w-6 h-6 text-blue-300" />
//                 </div>

//                 <div
//                   className="absolute top-16 right-12 w-10 h-10 bg-cyan-600/30 rounded-full flex items-center justify-center animate-bounce"
//                   style={{ animationDelay: "0.5s" }}
//                 >
//                   <Send className="w-5 h-5 text-cyan-300" />
//                 </div>

//                 <div
//                   className="absolute bottom-20 left-16 w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center animate-bounce"
//                   style={{ animationDelay: "1s" }}
//                 >
//                   <MessageSquare className="w-7 h-7 text-blue-300" />
//                 </div>

//                 <div
//                   className="absolute bottom-32 right-8 w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center animate-bounce"
//                   style={{ animationDelay: "1.5s" }}
//                 >
//                   <Phone className="w-4 h-4 text-cyan-300" />
//                 </div>

//                 {/* Orbital Ring */}
//                 <div
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-400/20 rounded-full animate-spin"
//                   style={{ animationDuration: "20s" }}
//                 >
//                   <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
//                 </div>

//                 {/* Inner Ring */}
//                 <div
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-400/30 rounded-full animate-spin"
//                   style={{
//                     animationDuration: "15s",
//                     animationDirection: "reverse",
//                   }}
//                 >
//                   <div className="absolute -top-1.5 right-0 w-3 h-3 bg-cyan-500 rounded-full"></div>
//                 </div>

//                 {/* Glowing Dots */}
//                 <div className="absolute top-4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
//                 <div
//                   className="absolute bottom-4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
//                   style={{ animationDelay: "1s" }}
//                 ></div>
//                 <div
//                   className="absolute left-4 top-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping"
//                   style={{ animationDelay: "2s" }}
//                 ></div>

//                 {/* Connection Lines */}
//                 <svg
//                   className="absolute inset-0 w-full h-full"
//                   viewBox="0 0 384 384"
//                 >
//                   <defs>
//                     <linearGradient
//                       id="lineGradient"
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="100%"
//                     >
//                       <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
//                       <stop
//                         offset="100%"
//                         stopColor="#06b6d4"
//                         stopOpacity="0.1"
//                       />
//                     </linearGradient>
//                   </defs>
//                   <path
//                     d="M 50 80 Q 192 50 334 120 T 300 300 Q 200 350 100 250 T 50 80"
//                     fill="none"
//                     stroke="url(#lineGradient)"
//                     strokeWidth="2"
//                     className="animate-pulse"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle, Linkedin, Github, Twitter, Heart, Code, Zap } from "lucide-react";
import * as THREE from 'three';

// Floating Particles Component using Three.js
function FloatingParticles() {
  const mountRef = useRef(null);
  
  React.useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 25;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3
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
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call - replace with your actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Email sending error:", err);
      setErrorMsg("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
  //     {/* Three.js Background */}
  //     <FloatingParticles />
      
  //     {/* Enhanced Background Elements */}
  //     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  //       <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
  //       <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-radial from-indigo-100/50 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
  //       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-50/60 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        
  //       {/* Animated Grid Pattern */}
  //       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/5 to-transparent">
  //         <div className="w-full h-full opacity-10" style={{
  //           backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
  //           backgroundSize: '60px 60px'
  //         }}></div>
  //       </div>
  //     </div>

  //     <div className="relative z-10 container mx-auto px-4 py-16">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
  //         {/* Left Side - Contact Form */}
  //         <div className="space-y-8">
  //           {/* Header */}
  //           <div className="space-y-6">
  //             <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
  //               Get In
  //               <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
  //                 Touch
  //               </span>
  //             </h1>
  //             <p className="text-xl text-slate-600 leading-relaxed">
  //               Have an exciting project in mind? Let's discuss how we can bring your vision to life with cutting-edge technology and creative solutions.
  //             </p>
  //           </div>

  //           {/* Contact Info Cards */}
  //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  //             <a
  //               href="mailto:suhailsaid689@gmail.com"
  //               className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
  //             >
  //               <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
  //                 <Mail className="w-5 h-5 text-blue-600" />
  //               </div>
  //               <p className="text-sm text-slate-500 font-medium">Email</p>
  //               <p className="text-slate-900 font-semibold text-sm">Get in touch</p>
  //             </a>

  //             <a
  //               href="tel:+918848678300"
  //               className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-green-200 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
  //             >
  //               <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
  //                 <Phone className="w-5 h-5 text-green-600" />
  //               </div>
  //               <p className="text-sm text-slate-500 font-medium">Phone</p>
  //               <p className="text-slate-900 font-semibold text-sm">Let's talk</p>
  //             </a>

  //             <div className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-purple-200 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
  //               <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
  //                 <MapPin className="w-5 h-5 text-purple-600" />
  //               </div>
  //               <p className="text-sm text-slate-500 font-medium">Location</p>
  //               <p className="text-slate-900 font-semibold text-sm">Kerala, India</p>
  //             </div>
  //           </div>

  //           {/* Success/Error Messages */}
  //           {success && (
  //             <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
  //               <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
  //               <div>
  //                 <p className="text-green-800 font-semibold">Message sent successfully!</p>
  //                 <p className="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
  //               </div>
  //             </div>
  //           )}

  //           {errorMsg && (
  //             <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-fadeIn">
  //               <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
  //               <p className="text-red-800">{errorMsg}</p>
  //             </div>
  //           )}

  //           {/* Contact Form */}
  //           <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-xl shadow-slate-500/10">
  //             <div className="space-y-6">
  //               {/* Name and Email Row */}
  //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //                 <div className="relative group">
  //                   <label className="block text-sm font-semibold text-slate-700 mb-2">
  //                     Full Name <span className="text-red-500">*</span>
  //                   </label>
  //                   <div className="relative">
  //                     <User className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
  //                       focusedField === 'name' ? 'text-blue-600' : 'text-slate-400'
  //                     }`} />
  //                     <input
  //                       type="text"
  //                       name="name"
  //                       placeholder="Enter your name"
  //                       value={formData.name}
  //                       onChange={handleChange}
  //                       onFocus={() => setFocusedField('name')}
  //                       onBlur={() => setFocusedField('')}
  //                       required
  //                       className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-slate-300"
  //                     />
  //                   </div>
  //                 </div>

  //                 <div className="relative group">
  //                   <label className="block text-sm font-semibold text-slate-700 mb-2">
  //                     Email Address <span className="text-red-500">*</span>
  //                   </label>
  //                   <div className="relative">
  //                     <Mail className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
  //                       focusedField === 'email' ? 'text-blue-600' : 'text-slate-400'
  //                     }`} />
  //                     <input
  //                       type="email"
  //                       name="email"
  //                       placeholder="Enter your email"
  //                       value={formData.email}
  //                       onChange={handleChange}
  //                       onFocus={() => setFocusedField('email')}
  //                       onBlur={() => setFocusedField('')}
  //                       required
  //                       className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-slate-300"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* Subject */}
  //               <div className="relative group">
  //                 <label className="block text-sm font-semibold text-slate-700 mb-2">
  //                   Subject
  //                 </label>
  //                 <div className="relative">
  //                   <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
  //                     focusedField === 'subject' ? 'text-blue-600' : 'text-slate-400'
  //                   }`} />
  //                   <input
  //                     type="text"
  //                     name="subject"
  //                     placeholder="What's this about?"
  //                     value={formData.subject}
  //                     onChange={handleChange}
  //                     onFocus={() => setFocusedField('subject')}
  //                     onBlur={() => setFocusedField('')}
  //                     className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-slate-300"
  //                   />
  //                 </div>
  //               </div>

  //               {/* Message */}
  //               <div className="relative group">
  //                 <label className="block text-sm font-semibold text-slate-700 mb-2">
  //                   Message <span className="text-red-500">*</span>
  //                 </label>
  //                 <div className="relative">
  //                   <textarea
  //                     name="message"
  //                     placeholder="Tell me about your project, goals, and how I can help..."
  //                     value={formData.message}
  //                     onChange={handleChange}
  //                     onFocus={() => setFocusedField('message')}
  //                     onBlur={() => setFocusedField('')}
  //                     required
  //                     rows="5"
  //                     className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none hover:border-slate-300"
  //                   ></textarea>
  //                 </div>
  //               </div>

  //               {/* Submit Button */}
  //               <button
  //                 onClick={handleSubmit}
  //                 disabled={loading}
  //                 className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 ${
  //                   loading ? 'cursor-not-allowed' : ''
  //                 }`}
  //               >
  //                 {loading ? (
  //                   <>
  //                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
  //                     Sending Message...
  //                   </>
  //                 ) : (
  //                   <>
  //                     <Send className="w-5 h-5" />
  //                     Send Message
  //                   </>
  //                 )}
  //               </button>
  //             </div>
  //           </div>

  //           {/* Social Links */}
  //           <div className="flex items-center justify-center gap-4">
  //             <span className="text-slate-600 text-sm font-medium">Connect with me:</span>
  //             <div className="flex gap-3">
  //               <a
  //                 href="#"
  //                 className="w-10 h-10 bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
  //               >
  //                 <Github className="w-5 h-5" />
  //               </a>
  //               <a
  //                 href="#"
  //                 className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
  //               >
  //                 <Linkedin className="w-5 h-5" />
  //               </a>
  //               <a
  //                 href="#"
  //                 className="w-10 h-10 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
  //               >
  //                 <Twitter className="w-5 h-5" />
  //               </a>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Right Side - Enhanced Animation */}
  //         <div className="hidden lg:flex items-center justify-center">
  //           <div className="relative w-96 h-96">
  //             {/* Central Hub */}
  //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center">
  //               <Heart className="w-8 h-8 text-white animate-pulse" />
  //             </div>

  //             {/* Orbiting Elements */}
  //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin" style={{ animationDuration: '20s' }}>
  //               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center">
  //                 <Mail className="w-6 h-6 text-white" />
  //               </div>
  //               <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
  //                 <Code className="w-6 h-6 text-white" />
  //               </div>
  //               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg flex items-center justify-center">
  //                 <Zap className="w-6 h-6 text-white" />
  //               </div>
  //               <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-lg flex items-center justify-center">
  //                 <Send className="w-6 h-6 text-white" />
  //               </div>
  //             </div>

  //             {/* Secondary Ring */}
  //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
  //               <div className="absolute -top-4 right-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-lg flex items-center justify-center">
  //                 <Phone className="w-4 h-4 text-white" />
  //               </div>
  //               <div className="absolute bottom-8 -right-4 w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center">
  //                 <MessageSquare className="w-4 h-4 text-white" />
  //               </div>
  //               <div className="absolute -bottom-4 left-8 w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg shadow-lg flex items-center justify-center">
  //                 <User className="w-4 h-4 text-white" />
  //               </div>
  //               <div className="absolute top-8 -left-4 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-lg flex items-center justify-center">
  //                 <MapPin className="w-4 h-4 text-white" />
  //               </div>
  //             </div>

  //             {/* Floating Particles */}
  //             <div className="absolute inset-0">
  //               <div className="absolute top-8 left-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
  //               <div className="absolute top-20 right-12 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
  //               <div className="absolute bottom-16 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
  //               <div className="absolute bottom-24 right-16 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
  //               <div className="absolute top-32 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
  //               <div className="absolute bottom-32 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
  //             </div>

  //             {/* Glowing Rings */}
  //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-blue-200/30 rounded-full animate-pulse"></div>
  //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-indigo-200/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

  //             {/* Connection Lines */}
  //             <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 384 384">
  //               <defs>
  //                 <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
  //                   <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
  //                   <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
  //                 </linearGradient>
  //               </defs>
  //               <path
  //                 d="M 192 40 Q 320 80 340 192 Q 300 320 192 340 Q 80 300 40 192 Q 80 80 192 40"
  //                 fill="none"
  //                 stroke="url(#connectionGradient)"
  //                 strokeWidth="2"
  //                 className="animate-pulse"
  //               />
  //               <path
  //                 d="M 150 150 Q 192 120 234 150 Q 264 192 234 234 Q 192 264 150 234 Q 120 192 150 150"
  //                 fill="none"
  //                 stroke="url(#connectionGradient)"
  //                 strokeWidth="1"
  //                 className="animate-pulse"
  //                 style={{ animationDelay: '1s' }}
  //               />
  //             </svg>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Custom CSS */}
  //     <style jsx>{`
  //       .bg-gradient-radial {
  //         background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
  //       }

  //       @keyframes fadeIn {
  //         from {
  //           opacity: 0;
  //           transform: translateY(10px);
  //         }
  //         to {
  //           opacity: 1;
  //           transform: translateY(0);
  //         }
  //       }

  //       .animate-fadeIn {
  //         animation: fadeIn 0.3s ease-out;
  //       }
  //     `}</style>
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-5xl mt-3 md:text-6xl font-bold text-slate-900 leading-tight">
                Get In
                <span className="block text-blue-600">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have an exciting project in mind? Let's discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:suhailsaid689@gmail.com"
                className="p-4 bg-white rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <p className="text-slate-900 font-semibold text-sm">Get in touch</p>
              </a>

              <a
                href="tel:+918848678300"
                className="p-4 bg-white rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <p className="text-slate-900 font-semibold text-sm">Let's talk</p>
              </a>

              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-slate-900 font-semibold text-sm">Kerala, India</p>
              </div>
            </div>

            {/* Success/Error Messages */}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{errorMsg}</p>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-3 ${
                    loading ? 'cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-slate-600 text-sm font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/SaidSuhail"
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saidsuhail-vp/"
                  className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Standard Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-2xl w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Let's Connect</h3>
                  <p className="text-slate-600">
                    Reach out to discuss your project ideas and how we can collaborate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;