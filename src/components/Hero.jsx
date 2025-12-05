// import SHravu from "../assets/SHravu_3.jpg";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   ExternalLink,
//   Code,
//   Database,
//   Server,
//   User,
//   Briefcase,
//   GraduationCap,
//   Award,
//   Send,
//   Menu,
//   X,
//   ChevronDown,
//   Star,
// } from "lucide-react";
// import { STORE } from "../context/AppContext";
// import DarkLight from "./DarkLight";
// import Resume from "./Resume";

// export default function Hero() {
//   const { scrollToSection, light } = STORE();
//   return (
//     <section id="home" className="pt-9 pb-16 h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           {/* <div className="mb-5"> */}
//           {/* <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"> */}
//           <div className="w-full h-full  flex mt-8 mb-7 items-center justify-center">
//             {/* <User size={48} className="text-gray-600" /> */}
//             {/* <img className={`lg:h-32 h-24 rounded-br-4xl drop-shadow-lg rounded-tl-4xl ${!light? 'shadow-white' : 'shadow-black'}`} src={SHravu} alt="" /> */}
//             <img
//               src={SHravu}
//               alt=""
//               style={{
//                 boxShadow: light
//                   ? "0 4px 6px rgba(0,0,0,0.5)"
//                   : "0 4px 6px rgba(255,255,255,0.5)",
//                 transition: "box-shadow 0.5s ease-in-out",
//               }}
//               className="lg:h-32 h-24 rounded-br-4xl drop-shadow-lg rounded-tl-4xl"
//             />
//             {/* </div> */}
//             {/* </div> */}
//           </div>
//           <h1
//             className={`text-5xl font-any14 md:text-6xl mb-6 text-center ${
//               light ? "text-shadow-white" : "text-shadow-black"
//             }`}
//           >
//             Shravankumar Muchchandi
//           </h1>
//           <div className="flex w-full justify-around gap-2 items-center">
//             <div className="flex gap-5 items-center">
//               <div className="relative">
//                 <div className="group inline-flex items-center">
//                   {/* Tooltip shown to the left on hover */}
//                   <div
//                     className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs ${
//                       light ? "text-black" : "text-white"
//                     } text-xl border-b-2 border-blue-500 font-sans tracking-widest bg-opacity-60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap`}
//                   >
//                     Resume
//                   </div>
//                   {/* The Resume icon/component */}
//                   <Resume />
//                 </div>
//               </div>
//               <div
//                 className={`w-0.5 h-6 rounded-lg ${
//                   !light ? "bg-white" : "bg-black"
//                 }`}
//               ></div>
//               <DarkLight />
//             </div>
//           </div>
//           <p className="text-xl font-any14 font-light md:text-2xl mt-7 mb-1">
//             Frontend Developer | Full-Stack Developer
//           </p>
//           <div className="text-lg mb-10 font-any14 max-w-2xl mx-auto">
//             <p>
//               Self taught developer, passionate about solving real-world
//               problems through tech.
//             </p>
//             <p className="">
//               Experienced in <span className=" ">React</span>,{" "}
//               <span className="">Express.js</span>, and modern web technologies.
//             </p>
//           </div>
//           <div className="flex flex-row text-xl font-any14 justify-center">
//             <button
//               onClick={() => scrollToSection("projects")}
//               className={`px-4 py-2 bg-white hover:text-orange-400 text-black ${
//                 light ? "" : " hover:text-black hover:bg-black"
//               } transition-all`}
//             >
//               View My Work
//             </button>
//             <a
//               href="https://www.linkedin.com/in/shravusm/"
//               className={`px-4 py-2 bg-black text-white ${
//                 light
//                   ? " hover:text-blue-500 hover:bg-white"
//                   : " hover:text-blue-500 hover:bg-black"
//               } transition-all`}
//             >
//               Get In Touch
//             </a>
//           </div>
//           {/* <div className={`flex justify-center space-x-6 mt-8 ${light? 'text-black' : 'text-white'}`}>
//                         <a href="tel:+919019206067" className=" hover:text-blue-600 transition-colors">
//                             <Phone size={24} />
//                         </a>
//                         <a href="mailto:shravankumarmuchchandi@gmail.com" className=" hover:text-blue-600 transition-colors">
//                             <Mail size={24} />
//                         </a>
//                         <a href="https://www.linkedin.com/in/shravusm/" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 transition-colors">
//                             <Linkedin size={24} />
//                         </a>
//                         <a href="https://github.com/SHravuSM" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 transition-colors">
//                             <Github size={24} />
//                         </a>
//                     </div> */}
//           {/* <div className="flex space-x-4 mt-8">
//                                                 <a href="https://www.linkedin.com/in/shravusm" target="_blank" rel="noopener noreferrer"
//                                                     className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                                                     <Linkedin className="text-blue-600" size={24} />
//                                                 </a>
//                                                 <a href="https://github.com/SHravuSM" target="_blank" rel="noopener noreferrer"
//                                                     className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                                                     <Github className="text-gray-900" size={24} />
//                                                 </a>
//                                             </div> */}
//           <div
//             className={`flex justify-center flex-wrap gap-6 mt-16 text-xl ${
//               light ? "text-black" : "text-white"
//             }`}
//           >
//             {[
//               {
//                 href: "tel:+919019206067",
//                 label: "Call",
//                 icon: <Phone size={24} />,
//               },
//               {
//                 href: "mailto:shravankumarmuchchandi@gmail.com",
//                 label: "Email",
//                 icon: <Mail size={24} />,
//               },
//               {
//                 href: "https://www.linkedin.com/in/shravusm/",
//                 label: "LinkedIn",
//                 icon: <Linkedin size={24} />,
//                 external: true,
//               },
//               {
//                 href: "https://github.com/SHravuSM",
//                 label: "GitHub",
//                 icon: <Github size={24} />,
//                 external: true,
//               },
//             ].map(({ href, label, icon, external }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target={external ? "_blank" : undefined}
//                 rel={external ? "noopener noreferrer" : undefined}
//                 className="group relative transition-transform transform hover:scale-110 focus:scale-110 focus:outline-none"
//                 aria-label={label}
//               >
//                 {/* Tooltip */}
//                 <span
//                   className={`absolute font-light -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-sm bg-black text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300 pointer-events-none`}
//                 >
//                   {label}
//                 </span>

//                 {/* Icon */}
//                 <div
//                   className={`p-3 ${
//                     light ? "bg-white" : "bg-black"
//                   } rounded-lg shadow-sm hover:shadow-md transition-shadow`}
//                 >
//                   {icon}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import SHravu from "../assets/SHravu_3.jpg";
// import {
//   Mail,
//   Phone,
//   Linkedin,
//   Github,
// } from "lucide-react";
// import { STORE } from "../context/AppContext";
// import DarkLight from "./DarkLight";
// import Resume from "./Resume";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const { scrollToSection, light } = STORE();

//   return (
//     <section id="home" className="pt-9 pb-16 h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="text-center">

//           {/* IMAGE ANIMATION */}
//           <motion.div
//             initial={{ opacity: 0, y: -30, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="flex justify-center mb-8"
//           >
//             <motion.img
//               src={SHravu}
//               alt="Profile"
//               whileHover={{ scale: 1.08, rotate: 1.5 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               className="lg:h-36 h-28 rounded-br-4xl rounded-tl-4xl shadow-xl"
//               style={{
//                 boxShadow: light
//                   ? "0 4px 20px rgba(0,0,0,0.35)"
//                   : "0 4px 20px rgba(255,255,255,0.25)",
//               }}
//             />
//           </motion.div>

//           {/* NAME */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className={`text-5xl md:text-6xl font-any14 mb-4 ${
//               light ? "text-shadow-white" : "text-shadow-black"
//             }`}
//           >
//             Shravankumar Muchchandi
//           </motion.h1>

//           {/* DARK MODE + RESUME */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="flex justify-center gap-7 mb-4"
//           >
//             <Resume />

//             <div
//               className={`w-0.5 h-6 ${
//                 light ? "bg-black" : "bg-white"
//               } rounded-full`}
//             ></div>

//             <DarkLight />
//           </motion.div>

//           {/* POSITION TEXT */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="text-xl md:text-2xl font-any14 mt-4"
//           >
//             Frontend Developer • Full-Stack Developer
//           </motion.p>

//           {/* ABOUT TEXT */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="text-lg font-any14 max-w-2xl mx-auto mt-5 opacity-90"
//           >
//             <p>Self-taught developer driven by curiosity and problem-solving.</p>
//             <p>
//               Experienced in <span className="font-medium">React</span> &{" "}
//               <span className="font-medium">Express.js</span>, building clean,
//               scalable web apps.
//             </p>
//           </motion.div>

//           {/* BUTTON ANIMATIONS */}
//           <motion.div
//             className="flex justify-center gap-4 mt-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//           >
//             <motion.button
//               whileHover={{ scale: 1.07 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection("projects")}
//               className={`px-6 py-2 rounded-lg bg-white text-black hover:text-orange-500 transition-all ${
//                 light ? "" : "hover:bg-black hover:text-white"
//               }`}
//             >
//               View My Work
//             </motion.button>

//             <motion.a
//               href="https://www.linkedin.com/in/shravusm/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.07 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-6 py-2 rounded-lg bg-black text-white ${
//                 light
//                   ? "hover:text-blue-500 hover:bg-white"
//                   : "hover:text-blue-400 hover:bg-black"
//               } transition-all`}
//             >
//               Get In Touch
//             </motion.a>
//           </motion.div>

//           {/* SOCIAL ICONS */}
//           <motion.div
//             className={`flex justify-center gap-8 mt-14 text-xl ${
//               light ? "text-black" : "text-white"
//             }`}
//             initial="hidden"
//             animate="visible"
//             variants={{
//               visible: {
//                 transition: { staggerChildren: 0.15, delayChildren: 1.4 },
//               },
//             }}
//           >
//             {[
//               { href: "tel:+919019206067", icon: <Phone size={24} />, label: "Call" },
//               { href: "mailto:shravankumarmuchchandi@gmail.com", icon: <Mail size={24} />, label: "Email" },
//               { href: "https://linkedin.com/in/shravusm", icon: <Linkedin size={24} />, label: "LinkedIn", external: true },
//               { href: "https://github.com/SHravuSM", icon: <Github size={24} />, label: "GitHub", external: true },
//             ].map((item) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 target={item.external ? "_blank" : undefined}
//                 rel={item.external ? "noopener noreferrer" : undefined}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 whileHover={{ scale: 1.2, y: -3 }}
//                 className="relative group"
//               >
//                 <span className="absolute font-light -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-sm bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   {item.label}
//                 </span>
//                 <div
//                   className={`p-3 rounded-lg ${
//                     light ? "bg-white" : "bg-black"
//                   } shadow-sm`}
//                 >
//                   {item.icon}
//                 </div>
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import SHravu from "../assets/SHravu_3.jpg";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { STORE } from "../context/AppContext";
import DarkLight from "./DarkLight";
import Resume from "./Resume";
import { motion } from "framer-motion";

/* ------------------ BACKGROUND GRAPHICS ------------------ */

const AnimatedBackground = ({ light }) => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient Blob 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: light ? 0.25 : 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"
        style={{ top: "-10%", left: "-10%" }}
      />

      {/* Gradient Blob 2 */}
      <motion.div
        animate={{ opacity: light ? 0.25 : 0.15 }}
        className="absolute w-[450px] h-[450px] bg-purple-500 rounded-full blur-[150px]"
        style={{ bottom: "-10%", right: "-15%" }}
      />

      {/* Orbit Ring Behind Image */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute inset-0 flex justify-center mt-12"
      >
        <div
          className={`rounded-full border ${
            light ? "border-blue-400/20" : "border-blue-300/10"
          } h-60 w-60 md:h-72 md:w-72`}
        ></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -150],
            x: Math.random() * 80 - 40,
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className={`absolute w-1 h-1 rounded-full ${
            light ? "bg-black" : "bg-white"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}
    </div>
  );
};

/* ------------------ HERO COMPONENT ------------------ */

export default function Hero() {
  const { scrollToSection, light } = STORE();

  return (
    <section
      id="home"
      className="pt-9 pb-16 h-screen flex items-center relative overflow-hidden"
    >
      {/* 🔥 FUTURISTIC BACKGROUND GRAPHICS */}
      <AnimatedBackground light={light} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <motion.img
              src={SHravu}
              alt="Profile"
              whileHover={{ scale: 1.08, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="lg:h-36 h-28 rounded-br-4xl rounded-tl-4xl shadow-xl"
              style={{
                boxShadow: light
                  ? "0 4px 20px rgba(0,0,0,0.35)"
                  : "0 4px 20px rgba(255,255,255,0.25)",
              }}
            />
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-5xl md:text-6xl font-any14 mb-4 ${
              light ? "text-shadow-white" : "text-shadow-black"
            }`}
          >
            Shravankumar Muchchandi
          </motion.h1>

          {/* RESUME + DARK MODE TOGGLE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-7 mb-4"
          >
            <Resume />

            <div
              className={`w-0.5 h-6 ${
                light ? "bg-black" : "bg-white"
              } rounded-full`}
            ></div>

            <DarkLight />
          </motion.div>

          {/* TITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-any14 mt-4"
          >
            Frontend Developer • Full-Stack Developer
          </motion.p>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg font-any14 max-w-2xl mx-auto mt-5 opacity-90"
          >
            <p>
              Self-taught developer driven by curiosity and problem-solving.
            </p>
            <p>
              Experienced in <span className="font-medium">React</span> &{" "}
              <span className="font-medium">Express.js</span>, building clean,
              scalable web apps.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className={`px-6 py-2 rounded-lg bg-white text-black hover:text-orange-500 transition-all ${
                light ? "" : "hover:bg-black hover:text-white"
              }`}
            >
              View My Work
            </motion.button>

            <motion.a
              href="https://www.linkedin.com/in/shravusm/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg bg-black text-white ${
                light
                  ? "hover:text-blue-500 hover:bg-white"
                  : "hover:text-blue-400 hover:bg-black"
              } transition-all`}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className={`flex justify-center gap-8 mt-14 text-xl ${
              light ? "text-black" : "text-white"
            }`}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 1.4 },
              },
            }}
          >
            {[
              {
                href: "tel:+919019206067",
                icon: <Phone size={24} />,
                label: "Call",
              },
              {
                href: "mailto:shravankumarmuchchandi@gmail.com",
                icon: <Mail size={24} />,
                label: "Email",
              },
              {
                href: "https://linkedin.com/in/shravusm",
                icon: <Linkedin size={24} />,
                label: "LinkedIn",
                external: true,
              },
              {
                href: "https://github.com/SHravuSM",
                icon: <Github size={24} />,
                label: "GitHub",
                external: true,
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2, y: -3 }}
                className="relative group"
              >
                <span className="absolute font-light -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-sm bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.label}
                </span>
                <div
                  className={`p-3 rounded-lg ${
                    light ? "bg-white" : "bg-black"
                  } shadow-sm`}
                >
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
