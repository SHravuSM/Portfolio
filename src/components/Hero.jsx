import SHravu from '../assets/SHravu_3.jpg';
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
import DarkLight from './DarkLight';
import Resume from './Resume';

export default function Hero() {
    const { scrollToSection, light } = STORE();
    return (
        <section id="home" className="pt-9 pb-16 h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* <div className="mb-5"> */}
                    {/* <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"> */}
                    <div className="w-full h-full  flex mt-8 mb-7 items-center justify-center">
                        {/* <User size={48} className="text-gray-600" /> */}
                        {/* <img className={`lg:h-32 h-24 rounded-br-4xl drop-shadow-lg rounded-tl-4xl ${!light? 'shadow-white' : 'shadow-black'}`} src={SHravu} alt="" /> */}
                        <img
                            src={SHravu}
                            alt=""
                            style={{
                                boxShadow: light
                                    ? '0 4px 6px rgba(0,0,0,0.5)'
                                    : '0 4px 6px rgba(255,255,255,0.5)',
                                transition: 'box-shadow 0.5s ease-in-out',
                            }}
                            className="lg:h-32 h-24 rounded-br-4xl drop-shadow-lg rounded-tl-4xl"
                        />
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <h1 className={`text-5xl font-any14 md:text-6xl mb-6 text-center ${light ? 'text-shadow-white' : 'text-shadow-black'}`}>
                        Shravankumar Muchchandi
                    </h1>
                    <div className='flex w-full justify-around gap-2 items-center'>
                        <div className='flex gap-5 items-center'>
                            <div className='relative'>
                                <div className='group inline-flex items-center'>
                                    {/* Tooltip shown to the left on hover */}
                                    <div className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs ${light ? 'text-black' : 'text-white'} text-xl border-b-2 border-blue-500 font-sans tracking-widest bg-opacity-60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap`}>
                                        Resume
                                    </div>
                                    {/* The Resume icon/component */}
                                    <Resume />
                                </div>
                            </div>
                            <div className={`w-0.5 h-6 rounded-lg ${!light ? 'bg-white' : 'bg-black'}`}></div>
                            <DarkLight />
                        </div>
                    </div>
                    <p className="text-xl font-any14 font-light md:text-2xl mt-7 mb-1">
                        Frontend Developer | Full-Stack Developer
                    </p>
                    <div className="text-lg mb-10 font-any14 max-w-2xl mx-auto">
                        <p>Self taught developer, passionate about solving real-world problems through tech.</p>
                        <p className="">Experienced in <span className=" ">React</span>, <span className="">Express.js</span>, and modern web technologies.</p>
                    </div>
                    <div className="flex flex-row text-xl font-any14 justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`px-4 py-2 bg-white hover:text-orange-400 text-black ${light ? '' : ' hover:text-black hover:bg-black'} transition-all`}
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`px-4 py-2 bg-black text-white ${light ? ' hover:text-blue-500 hover:bg-white' : ' hover:text-blue-500 hover:bg-black'} transition-all`}
                        >
                            Get In Touch
                        </button>
                    </div>
                    {/* <div className={`flex justify-center space-x-6 mt-8 ${light? 'text-black' : 'text-white'}`}>
                        <a href="tel:+919019206067" className=" hover:text-blue-600 transition-colors">
                            <Phone size={24} />
                        </a>
                        <a href="mailto:shravankumarmuchchandi@gmail.com" className=" hover:text-blue-600 transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shravusm/" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/SHravuSM" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                    </div> */}
                    {/* <div className="flex space-x-4 mt-8">
                                                <a href="https://www.linkedin.com/in/shravusm" target="_blank" rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                    <Linkedin className="text-blue-600" size={24} />
                                                </a>
                                                <a href="https://github.com/SHravuSM" target="_blank" rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                    <Github className="text-gray-900" size={24} />
                                                </a>
                                            </div> */}
                    <div className={`flex justify-center flex-wrap gap-6 mt-16 text-xl ${light ? 'text-black' : 'text-white'}`}>
                        {[
                            {
                                href: "tel:+919019206067",
                                label: "Call",
                                icon: <Phone size={24} />,
                            },
                            {
                                href: "mailto:shravankumarmuchchandi@gmail.com",
                                label: "Email",
                                icon: <Mail size={24} />,
                            },
                            {
                                href: "https://www.linkedin.com/in/shravusm/",
                                label: "LinkedIn",
                                icon: <Linkedin size={24} />,
                                external: true,
                            },
                            {
                                href: "https://github.com/SHravuSM",
                                label: "GitHub",
                                icon: <Github size={24} />,
                                external: true,
                            },
                        ].map(({ href, label, icon, external }) => (
                            <a
                                key={label}
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                className="group relative transition-transform transform hover:scale-110 focus:scale-110 focus:outline-none"
                                aria-label={label}
                            >
                                {/* Tooltip */}
                                <span className={`absolute font-light -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-sm bg-black text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300 pointer-events-none`}>
                                    {label}
                                </span>

                                {/* Icon */}
                                <div className={`p-3 ${light ? 'bg-white' : 'bg-black'} rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
                                    {icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
