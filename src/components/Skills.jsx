import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFileExcel
} from "react-icons/fa";

import {
  SiCplusplus,
  SiC,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiCanva
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {

  // ALL skills in one list
  const allSkills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiC />, name: "C" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiReact />, name: "React.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaFileExcel />, name: "MS Excel" },
    { icon: <SiCanva />, name: "Canva" },
  ];

  const loopSkills = [...allSkills, ...allSkills]; // for infinite scroll

  return (
    <div
      className="
        w-[350px] p-5
        bg-white/5 backdrop-blur-xl rounded-2xl
        shadow-[0_0_25px_rgba(128,0,255,0.25)]
        border border-white/10 space-y-6
      "
    >

      <h2 className="text-center text-2xl font-bold text-purple-400 relative">
         My Tech Stack
       <span className="block w-32 h-[3px] bg-purple-300 mx-auto mt-1 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
      </h2>


      {/* ROW 1 → LEFT SCROLL */}
      <div className="overflow-hidden">
        <div className="flex gap-4 w-max animate-skillLeft">
          {loopSkills.map((skill, i) => (
            <div
              key={i}
              className="min-w-[130px] bg-black/30 px-4 py-2 rounded-xl
                         flex items-center gap-2 shadow-md"
            >
              <span className="text-purple-400 text-xl">{skill.icon}</span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 → RIGHT SCROLL */}
      <div className="overflow-hidden">
        <div className="flex gap-4 w-max animate-skillRight">
          {loopSkills.map((skill, i) => (
            <div
              key={i}
              className="min-w-[130px] bg-black/30 px-4 py-2 rounded-xl
                         flex items-center gap-2 shadow-md"
            >
              <span className="text-purple-400 text-xl">{skill.icon}</span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
