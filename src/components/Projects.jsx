// import React from "react";
// import { ExternalLink } from "lucide-react";
// import { STORE } from "../context/AppContext";

// export default function Projects() {
//   const { light } = STORE();
//   const projects = [
//     {
//       title: "Vehicle Rental Platform",
//       description:
//         "Platform for local vehicle owners in tourist areas to list and rent vehicles easily to tourists.",
//       technologies: ["React.js", "Tailwind CSS", "Firebase", "Context API"],
//       features: [
//         "Responsive design",
//         "Firebase Auth + Firestore",
//         "Direct bookings without middlemen",
//         "Streamlined rental flow",
//       ],
//       liveUrl: "https://vihar.netlify.app",
//     },
//     {
//       title: "RFID Attendance System",
//       description:
//         "RFID-powered attendance tracking system for government colleges, with live dashboards.",
//       technologies: ["React.js", "Zustand", "Node.js", "Express.js", "MongoDB"],
//       features: [
//         "Role-based dashboards",
//         "JWT Authentication",
//         "Real-time reporting",
//         "Modular backend structure",
//       ],
//       liveUrl: "https://rfid-system-gecg.onrender.com",
//     },
//     {
//       title: "Meow-Jerry",
//       description:
//         "RFID-powered attendance tracking system for government colleges, with live dashboards.",
//       technologies: ["React.js", "Zustand", "Node.js", "Express.js", "MongoDB"],
//       features: [
//         "Smooth typing experience",
//         "Key Tracking",
//         "Real-time work count and displaying WPM",
//         "Modular backend structure",
//       ],
//       liveUrl: "https://meow-jerry.netlify.app/",
//     },
//     {
//       title: "Some-Geeta",
//       description:
//         "RFID-powered attendance tracking system for government colleges, with live dashboards.",
//       technologies: ["React.js"],
//       features: [],
//       liveUrl: "https://somegeeta.netlify.app/",
//     },
//     {
//       title: "Tic-Tac-Toe",
//       description: "",
//       technologies: ["React.js", "Zustand", "Tailwind"],
//       features: [],
//       liveUrl: "https://tic-tac-toe-shravu.netlify.app/",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className={`py-24 ${!light ? "bg-black" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-4xl font-bold mb-4 ${
//               !light ? "text-white " : "text-black"
//             }`}
//           >
//             {" "}
//             My Featured Projects
//           </h2>
//           <p className={`text-lg ${light ? "text-black" : "text-white"}`}>
//             Real-world apps built with scalable architecture & modern UI/UX
//           </p>
//         </div>

//         <div className="grid gap-12 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={` inset-0 h-96 rounded-2xl border-2   overflow-hidden shadow-xl group bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80 flex flex-col justify-end p-6 ${
//                 light ? "bg-black/90" : "bg-white"
//               }`}
//             >
//               <h3 className="text-2xl font-bold text-blue-500 mb-1">
//                 {project.title}
//               </h3>
//               <p
//                 className={` ${
//                   !light ? "text-slate-500" : "text-white"
//                 } text-sm mb-3`}
//               >
//                 {project.description}
//               </p>

//               <div
//                 className={`${
//                   !light ? "bg-white" : "bg-red/90"
//                 } bg-opacity-10 backdrop-blur-md rounded-lg pt-4 mb-4`}
//               >
//                 <h4
//                   className={`${
//                     !light ? "text-black" : "text-white"
//                   }  font-semibold text-lg mb-2`}
//                 >
//                   ✨ Features:
//                 </h4>
//                 <ul
//                   className={`text-sm text-gray-200 space-y-1 list-disc list-inside`}
//                 >
//                   {project.features.map((f, i) => (
//                     <li
//                       className={`${light ? "text-white" : "text-black"}`}
//                       key={i}
//                     >
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className={` bg-blue-500 ${
//                       !light ? "text-white" : "text-black/90"
//                     } text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm`}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
//               >
//                 View Live Project
//                 <ExternalLink className="ml-2 w-4 h-4" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { ExternalLink } from "lucide-react";
import { STORE } from "../context/AppContext";

export default function Projects() {
  const { light } = STORE();

  const projects = [
    {
      title: "RFID Attendance System",
      description:
        "RFID-powered attendance tracking system for government colleges, with live dashboards.",
      technologies: ["React.js", "Zustand", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Role-based dashboards",
        "JWT Authentication",
        "Real-time reporting",
        "Modular backend structure",
      ],
      liveUrl: "https://rfid-system-gecg.onrender.com",
    },
    {
      title: "RF-Tower Linker",
      description:
        "Tool to model and visualize RF tower connectivity, compute link feasibility, and explore network paths.",
      technologies: ["JavaScript", "GeoJSON", "Mapping APIs"],
      features: [
        "Tower distance computation",
        "Link feasibility modelling",
        "Graph-based network visualization",
        "Clean and lightweight interface",
      ],
      liveUrl: "https://rf-linker.netlify.app/",
    },
    {
      title: "Vehicle Rental Platform",
      description:
        "Platform for local vehicle owners in tourist areas to list and rent vehicles easily to tourists.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Context API"],
      features: [
        "Responsive design",
        "Firebase Auth + Firestore",
        "Direct bookings without middlemen",
        "Streamlined rental flow",
      ],
      liveUrl: "https://vihar.netlify.app",
    },
    {
      title: "Meow-Jerry",
      description: "Typing trainer with real-time stats and smooth UX.",
      technologies: ["React.js", "Zustand", "Node.js", "Express.js", "MongoDB"],
      features: ["Smooth typing", "Key tracking", "Live WPM", "Clean backend"],
      liveUrl: "https://meow-jerry.netlify.app/",
    },
    {
      title: "Some-Geeta",
      description: "Simple scripture reader with clean modern UI.",
      technologies: ["React.js"],
      features: [],
      liveUrl: "https://somegeeta.netlify.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description: "",
      technologies: ["React.js", "Zustand", "Tailwind"],
      features: [],
      liveUrl: "https://tic-tac-toe-shravu.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 transition-colors ${
        light ? "bg-white" : "bg-neutral-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-semibold ${
              light ? "text-neutral-900" : "text-white"
            }`}
          >
            My Featured Projects
          </h2>
          <p
            className={`mt-3 text-base ${
              light ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            Applications designed with scalability, clarity, and modern UI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all p-7 
                ${
                  light
                    ? "bg-white border-neutral-200 hover:shadow-lg"
                    : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                }
                hover:-translate-y-1 duration-200`}
            >
              {/* Title */}
              <h3
                className={`text-2xl font-medium mb-2 ${
                  light ? "text-neutral-900" : "text-white"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-5 leading-relaxed ${
                  light ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {project.description}
              </p>

              {/* Features */}
              {project.features.length > 0 && (
                <div className="mb-5">
                  <h4
                    className={`text-sm font-medium mb-2 ${
                      light ? "text-neutral-800" : "text-neutral-300"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className={`${
                          light ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        • {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      light
                        ? "border-neutral-300 text-neutral-700"
                        : "border-neutral-700 text-neutral-300"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium border px-4 py-2 rounded-lg transition 
                  ${
                    light
                      ? "border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                      : "border-neutral-700 text-neutral-200 hover:bg-neutral-800"
                  }`}
              >
                View Live <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
