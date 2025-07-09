// import React from 'react'
// import {
//     Mail,
//     Phone,
//     MapPin,
//     Github,
//     Linkedin,
//     ExternalLink,
//     Code,
//     Database,
//     Server,
//     User,
//     Briefcase,
//     GraduationCap,
//     Award,
//     Send,
//     Menu,
//     X,
//     ChevronDown,
//     Star
// } from 'lucide-react';

// export default function Projects() {
//     const projects = [
//         {
//             title: 'Vehicle Rental Platform',
//             description: 'A digital platform enabling local vehicle owners in tourist areas to list bikes, scooters, and cars, making rentals easily accessible to tourists.',
//             technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Context API'],
//             features: [
//                 'Intuitive UI with responsive layouts',
//                 'Firebase Authentication and Firestore integration',
//                 'Eliminates middlemen and manual coordination',
//                 'Streamlined booking experience'
//             ],
//             liveUrl: 'https://vihar.netlify.app',
//             image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop'
//         },
//         {
//             title: 'RFID Attendance System',
//             description: 'A comprehensive RFID-based entry/exit tracking system to digitize attendance at Government Engineering College Gangavathi.',
//             technologies: ['React.js', 'Zustand', 'Node.js', 'Express.js', 'MongoDB'],
//             features: [
//                 'Multi-role dashboards for Admins, Principals, and Teachers',
//                 'JWT-based authentication and role-based access control',
//                 'Real-time analytics and reporting',
//                 'Modular code structure'
//             ],
//             liveUrl: 'https://rfid-system-gecg.onrender.com',
//             image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop'
//         }
//     ];
//     return (
//         <section id="projects" className="py-20">
//             {/* <div className="backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl p-6 max-w-sm w-full"> */}
//             {/* <h2 className="text-lg font-semibold text-white mb-2">Transparent Card</h2>
//                 <p className="text-sm text-white/70">
//                     Subtle transparency with just the right amount of blur.
//                 </p> */}
//             {/* </div> */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Real-world applications built with modern technologies and best practices
//                     </p>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-8 ">
//                     {projects.map((project, index) => (
//                         <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
//                             <div className="h-48  bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                                 <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

//                                 <div className="mb-4">
//                                     <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
//                                     <ul className="text-sm text-gray-600 space-y-1">
//                                         {project.features.map((feature, idx) => (
//                                             <li key={idx} className="flex items-start">
//                                                 <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {project.technologies.map((tech, idx) => (
//                                         <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <a
//                                     href={project.liveUrl}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                                 >
//                                     View Live Project
//                                     <ExternalLink size={16} className="ml-1" />
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { STORE } from '../context/AppContext';

export default function Projects() {

    const { light } = STORE();
    const projects = [
        {
            title: 'Vehicle Rental Platform',
            description: 'Platform for local vehicle owners in tourist areas to list and rent vehicles easily to tourists.',
            technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Context API'],
            features: [
                'Responsive design',
                'Firebase Auth + Firestore',
                'Direct bookings without middlemen',
                'Streamlined rental flow'
            ],
            liveUrl: 'https://vihar.netlify.app',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop'
        },
        {
            title: 'RFID Attendance System',
            description: 'RFID-powered attendance tracking system for government colleges, with live dashboards.',
            technologies: ['React.js', 'Zustand', 'Node.js', 'Express.js', 'MongoDB'],
            features: [
                'Role-based dashboards',
                'JWT Authentication',
                'Real-time reporting',
                'Modular backend structure'
            ],
            liveUrl: 'https://rfid-system-gecg.onrender.com',
            image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=500&fit=crop'
        }
    ];

    return (
        <section id="projects" className={`py-24 ${!light ? 'bg-black' : 'bg-red-500'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${!light ? "text-white " : 'text-black'}`}> My Featured Projects</h2>
                    <p className="text-lg text-gray-600">Real-world apps built with scalable architecture & modern UI/UX</p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden shadow-xl group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80 flex flex-col justify-end p-6 ${light ? 'bg-black' : 'bg-white'}`}>
                                <h3 className="text-2xl font-bold text-red-500 mb-1 border">{project.title}</h3>
                                <p className="text-gray-200 text-sm mb-3 border">{project.description}</p>

                                <div className={`${!light ? "bg-white" : 'bg-black'} bg-opacity-10 backdrop-blur-md rounded-lg pt-4 mb-4`}>
                                    <h4 className={`${!light ? 'text-black' : "text-white"}  font-semibold text-lg mb-2`}>✨ Features:</h4>
                                    <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
                                        {project.features.map((f, i) => (
                                            <li className={`${light ? 'text-white' : 'text-black'}`} key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={` bg-blue-500 ${!light ? "text-white" : 'text-black'} text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                                >
                                    View Live Project
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}