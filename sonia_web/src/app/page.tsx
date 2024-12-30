import Navbar from "./Navbar/navbar";
import About from "./About/about";
import AboutMe from "./AboutMe/aboutme";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

// "use client"
// import Image from "next/image";
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Mail, Phone, ExternalLink } from 'lucide-react';

// export default function Home():any {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   // Navbar items
//   const navItems = ['About', 'Skills', 'Projects', 'Contact'];

//   // Skills data from CV
//   const skills = [
//     { category: 'Research', items: ['Data Collection', 'Qualitative Analysis', 'Quantitative Analysis'] },
//     { category: 'Technical', items: ['Electronic Health Systems', 'Data Analysis', 'Project Management'] },
//     { category: 'Soft Skills', items: ['Communication', 'Team Coordination', 'Stakeholder Management'] }
//   ];

//   // Projects data from CV
//   const projects = [
//     {
//       title: 'BREATHE Trial Research',
//       description: 'Led research study comparing efficacy of HFO vs SFO in reducing mortality and hospital stay. Conducted key informant interviews and analyzed complex datasets.',
//       role: 'Research Assistant',
//       duration: '2022 - Present'
//     },
//     {
//       title: 'Health & Wellness Clinic Management',
//       description: 'Managed virtual healthcare operations including patient scheduling, telehealth support, and EHR system administration.',
//       role: 'Virtual Assistant',
//       duration: '2021 - 2022'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#1a202c] text-white">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-navy-800 shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl font-bold">VS</h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => setActiveSection(item.toLowerCase())}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md hover:bg-navy-700 focus:outline-none"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => {
//                     setActiveSection(item.toLowerCase());
//                     setIsMenuOpen(false);
//                   }}
//                   className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-700 w-full text-left"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
//             Venesa Sonia
//           </h1>
//           <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
//             Research Assistant & Virtual Healthcare Specialist
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={() => setActiveSection('contact')}
//               className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
//             >
//               Get in Touch
//             </button>
//             <button
//               onClick={() => setActiveSection('projects')}
//               className="border border-blue-600 hover:bg-blue-600/20 px-6 py-3 rounded-full transition-colors"
//             >
//               View Projects
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-10 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {skills.map((skillGroup) => (
//               <div key={skillGroup.category} className="bg-navy-700 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
//                 <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
//                 <ul className="space-y-2">
//                   {skillGroup.items.map((item) => (
//                     <li key={item} className="flex items-center">
//                       <ChevronDown className="w-4 h-4 mr-2 text-blue-400" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {projects.map((project) => (
//               <div key={project.title} className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.role} | {project.duration}</p>
//                 <p className="text-gray-300">{project.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-10 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
//           <div className="flex flex-col items-center space-y-4">
//             <a href="mailto:venesas765@gmail.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
//               <Mail className="w-5 h-5" />
//               <span>venesas765@gmail.com</span>
//             </a>
//             <a href="tel:+254719850270" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
//               <Phone className="w-5 h-5" />
//               <span>+254 719 850 270</span>
//             </a>
//             <div className="flex space-x-4 mt-4">
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full hover:bg-blue-600/20 transition-colors"
//               >
//                 <ExternalLink className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;
