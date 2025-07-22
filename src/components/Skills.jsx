import React from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    ExternalLink,
    Code,
    Database,
    Server,
    User,
    Briefcase,
    GraduationCap,
    Award,
    Send,
    Menu,
    X,
    ChevronDown,
    Star
} from 'lucide-react';
import { STORE } from '../context/AppContext';

export default function Skills() {
    const { light } = STORE();
    const skills = {
        frontend: [
            { name: 'HTML5', level: 95 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript (ES6+)', level: 85 },
            { name: 'React.js', level: 90 },
            { name: 'Tailwind CSS', level: 90 },
        ],
        backend: [
            { name: 'Node.js', level: 80 },
            { name: 'Express.js', level: 80 },
            { name: 'REST APIs', level: 85 },
            { name: 'JWT Authentication', level: 75 },
            { name: 'Modular Architecture', level: 80 }
        ],
        database: [
            { name: 'MongoDB', level: 80 },
            { name: 'Firebase Firestore', level: 85 },
            { name: 'MySQL', level: 70 },
            { name: 'SQL', level: 75 }
        ],
        tools: [
            { name: 'Context API', level: 90 },
            { name: 'Zustand', level: 85 },
            { name: 'Mongoose', level: 75 },
            { name: 'Postman', level: 80 },
            { name: 'Git & GitHub', level: 85 },
        ]
    };
    return (
        <section id="skills" className="py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold ${light? 'text-gray-900' : 'text-white'} mb-4`}>Technical Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-white mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Proficient in modern web technologies with a focus on creating scalable, efficient solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Frontend */}
                    <div className={`p-6 rounded-md shadow-md backdrop-blur-lg ${!light ? 'bg-black/5' : 'bg-white'} border border-white/10 max-w-sm w-full`}>
                        <div className="flex items-center mb-4">
                            <Code className="text-blue-600 mr-3" size={24} />
                            <h3 className="text-xl font-bold text-blue-600">Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 ">
                            {skills.frontend.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className={`p-6 rounded-md shadow-md backdrop-blur-lg ${!light ? 'bg-black/5' : 'bg-white'} border border-white/10 max-w-sm w-full`}>
                        <div className="flex items-center mb-4">
                            <Server className="text-green-600 mr-3" size={24} />
                            <h3 className="text-xl font-bold text-green-600">Backend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="bg-green-900 text-white px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Database */}
                    <div className={`p-6 rounded-md shadow-md backdrop-blur-lg ${!light ? 'bg-black/5' : 'bg-white'} border border-white/10 max-w-sm w-full`}>
                        <div className="flex items-center mb-4">
                            <Database className="text-purple-600 mr-3" size={24} />
                            <h3 className="text-xl font-bold text-purple-600">Database</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.database.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className={`p-6 rounded-md shadow-md backdrop-blur-lg ${!light ? 'bg-black/5' : 'bg-white'} border border-white/10 max-w-sm w-full`}>
                        <div className="flex items-center mb-4">
                            <Briefcase className="text-[#FA9810] mr-3" size={24} />
                            <h3 className="text-xl font-bold text-[#FA9810]">Tools & Libraries</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
