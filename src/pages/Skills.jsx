import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJira,
  FaFigma,
  FaMicrosoft,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

export default function Skills() {
  const tech = [
    { name: "Power Apps", icon: <FaMicrosoft className="text-[#742774]" /> },
    { name: "Power BI", icon: <FaMicrosoft className="text-[#f2c811]" /> },
    {
      name: "Power Automate",
      icon: <FaMicrosoft className="text-[#a259ff]" />,
    },
    { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#3c873a]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#f29111]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#f34f29]" /> },
    { name: "Jira", icon: <FaJira className="text-[#2684ff]" /> },
    { name: "Figma", icon: <FaFigma className="text-[#a259ff]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#e34c26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#f7df1e]" /> },
  ];
  const pm = [
    "Scrum",
    "Kanban",
    "Rédaction de cahiers des charges",
    "Gestion du changement",
    "Conduite d’ateliers",
    "Recette fonctionnelle",
    "Analyse des besoins",
    "Gestion de planning",
    "Suivi budgétaire",
    "CRM",
    "Reporting",
  ];

  return (
    <section id="skills" className="bg-[#121212] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bloc Techniques */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">
              Techniques
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 text-gray-300">
              {tech.map((s, i) => (
                <li key={i} className="flex items-center gap-2">
                  {s.icon}
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc Fonctionnel */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">
              Fonctionnel
            </h3>
            <ul className="grid grid-cols-1 gap-y-3 text-gray-300 list-disc list-inside">
              {pm.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
