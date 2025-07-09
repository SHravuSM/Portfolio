// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function ProjectCard({ title, description, technologies, features, liveUrl, image }) {
//     return (
//         <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
//             <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                 <img src={image} alt={title} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

//                 <div className="mb-4">
//                     <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                         {features.map((feature, idx) => (
//                             <li key={idx} className="flex items-start">
//                                 <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                                 {feature}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                     {technologies.map((tech, idx) => (
//                         <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
//                             {tech}
//                         </span>
//                     ))}
//                 </div>

//                 <a
//                     href={liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                     View Live Project
//                     <ExternalLink size={16} className="ml-1" />
//                 </a>
//             </div>
//         </div>
//     );
// }
