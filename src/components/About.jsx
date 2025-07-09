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
import Card from './Card';
import { STORE } from '../context/AppContext';

export default function About() {
    const {light} = STORE();
    const achievements = [
        'State level Karate Silver Medalist',
        'Self-taught full-stack developer',
        'Built real-world solutions for educational institutes',
        'Passionate about swimming and exploring ancient Indian texts'
    ];
    return (
        <section id="about" className="py-10 font-light ">
            <div className="flex flex-col px-4 sm:px-4 lg:px-8">


                {/* <div className="grid md:grid-cols-2 gap-12 text-md lg:text-lg items-center"> */}
                <div className={`text-center ${light ? "text-black" : "text-white"} mb-7`}>
                    <h2 className="text-3xl md:text-4xl font-bold font-any14 mb-3 ">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>

                {/* <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                        <h4 className="text-xl font-bold mb-6 text-white">Key Achievements</h4>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start text-white">
                                    <Star size={16} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                                    <span>{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div> */}
                <Card achievements={achievements} />

                {/* </div> */}
            </div>
        </section>
    )
}
