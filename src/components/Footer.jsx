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

export default function Footer() {
    return (
        < footer className="bg-gray-900 text-white py-12" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-2xl font-bold mb-4">Shravankumar Muchchandi</div>
                    <p className="text-gray-400 mb-6">
                        Full-Stack Developer passionate about creating exceptional web experiences
                    </p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a
                            href="mailto:shravankumarmuchchandi@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="tel:+919019206067"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Phone size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shravusm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/SHravuSM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                    <div className="border-t border-gray-800 pt-8">
                        <p className="text-gray-400">&copy; 2025 Shravankumar Muchchandi. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}
