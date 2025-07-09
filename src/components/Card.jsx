// import React from 'react';
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

// const Card = ({ achievements }) => {
//     return (
//         <div className="w-[190px] h-[254px] bg-[#F8FBFE] rounded-lg mx-auto z-[1]">
//             <div className="flex items-center p-[9px]">
//                 <div className="px-1">
//                     <span className="inline-block w-[10px] h-[10px] p-[1px] rounded-full bg-[#ff605c]" />
//                 </div>
//                 <div className="px-1">
//                     <span className="inline-block w-[10px] h-[10px] p-[1px] rounded-full bg-[#ffbd44]" />
//                 </div>
//                 <div className="px-1">
//                     <span className="inline-block w-[10px] h-[10px] p-[1px] rounded-full bg-[#00ca4e]" />
//                 </div>
//             </div>
//             <div className="card__content">
//                 <h4 className="text-xl font-bold mb-6 text-white">Key Achievements</h4>
//                 <div className="space-y-4">
//                     {achievements.map((achievement, index) => (
//                         <div key={index} className="flex items-start text-white">
//                             <Star size={16} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
//                             <span>{achievement}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;


// import React from 'react';
// import { Star, MapPin } from 'lucide-react';
// import { STORE } from '../context/AppContext';
// // import Card from './Card';

// const Card = ({ achievements = [] }) => {
//     const { light } = STORE();
//     return (
//         <div className="bg-[#F8FBFE] rounded-lg shadow-md p-4 pt-2 flex flex-col">
//             {/* Top Bar Circles */}
//             <div className="flex items-center mb-2 justify-between">
//                 <div className='items-center flex'>
//                     <div className="px-1">
//                         <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ff605c]" />
//                     </div>
//                     <div className="px-1">
//                         <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ffbd44]" />
//                     </div>
//                     <div className="px-1">
//                         <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#00ca4e]" />
//                     </div>
//                 </div>
//                 <div></div>
//             </div>

//             {/* Content */}
//             <div className='flex w-full sm:flex-col space-y-5'>
//                 <div className='lg:w-8/12'>
//                     <h3 className="text-2xl font-bold font-any14 text-gray-900 mb-6">Full-Stack Developer & Problem Solver</h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                         I'm a passionate Frontend Developer with full-stack capabilities, specializing in React.js and modern web technologies.
//                         My journey in web development is driven by a love for creating intuitive, user-first solutions that solve real-world problems.
//                     </p>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                         I've independently learned and mastered full-stack development. Recently graduated, Electronics and Communication Engineering at Government Engineering College Gangavathi,
//                         building comprehensive web applications that serve actual business needs.
//                     </p>
//                     <p className="text-gray-600 mb-8 leading-relaxed">
//                         When I'm not coding, you'll find me practicing karate (I'm a state-level silver medalist!), swimming,
//                         or exploring the wisdom of ancient Indian texts.
//                     </p>

//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
//                             <p className="text-gray-600 flex items-center">
//                                 <MapPin size={16} className="mr-2" />
//                                 Bengaluru, Karnataka
//                             </p>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
//                             <p className="font-bold text-gray-600">ECE Engineering</p>
//                             <p className="text-sm font-bold text-black">CGPA: 7.23</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-grow lg:w-4/12 overflow-auto">
//                     <h4 className="text-xl font-bold mb-4 text-gray-800">Key Achievements</h4>
//                     <div className="space-y-3">
//                         {achievements.map((achievement, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-start text-gray-700 text-sm sm:text-base"
//                             >
//                                 <Star
//                                     size={16}
//                                     className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
//                                 />
//                                 <span className="leading-snug">{achievement}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>



//         </div>
//     );
// };

// export default Card;


import { Star, MapPin } from 'lucide-react';
import { STORE } from '../context/AppContext';

const Card = ({ achievements = [] }) => {
    const { light } = STORE();

    return (
        <div className="bg-[#F8FBFE] rounded-lg shadow-md p-4 flex flex-col w-full max-w-6xl mx-auto">
            {/* Top Bar Circles */}
            <div className="flex items-center mb-4 justify-between">
                <div className='items-center flex'>
                    <div className="px-1">
                        <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ff605c]" />
                    </div>
                    <div className="px-1">
                        <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ffbd44]" />
                    </div>
                    <div className="px-1">
                        <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#00ca4e]" />
                    </div>
                </div>
                <div></div>
            </div>

            {/* Responsive Content */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section */}
                <div className="w-full text-md lg:w-2/3">
                    <h3 className="lg:text-2xl text-xl font-bold font-any14 text-gray-900 mb-1">
                        Full-Stack Developer & Problem Solver
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I'm a passionate Frontend Developer with full-stack capabilities, specializing in React.js and modern web technologies.
                        My journey in web development is driven by a love for creating intuitive, user-first solutions that solve real-world problems.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I've independently learned and mastered full-stack development. Recently graduated, Electronics and Communication Engineering at Government Engineering College Gangavathi,
                        building comprehensive web applications that serve actual business needs.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        When I'm not coding, you'll find me practicing karate (I'm a state-level silver medalist!), swimming,
                        or exploring the wisdom of ancient Indian texts.
                    </p>

                    <div className="flex justify-between items-center sm:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                            <p className="text-gray-600 flex items-center">
                                Bengaluru, Karnataka
                                {/* <MapPin size={16} className="ml-2" /> */}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                            <p className="font-bold text-gray-600">ECE Engineering</p>
                            <p className="text-sm font-bold text-black">CGPA: 7.23</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/3">
                    <h4 className="text-2xl font-any14 font-bold mb-2 text-gray-800">Key Achievement & Intrests  :</h4>
                    <div className="space-y-3 max-h-[400px] pr-2">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="flex items-start font-any15 text-gray-700 text-2xl"
                            >
                                <Star
                                    size={13}
                                    className="text-yellow-500 mr-3 mt-2 flex-shrink-0"
                                />
                                <span className="leading-snug">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
