import React from "react";

export default function Skills() {
  const tech = [
    "Power Apps",
    "Power BI",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "Jira",
    "Figma",
  ];
  const pm = ["Scrum", "Kanban", "Rédaction de cahiers des charges", "CRM"];

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
            <ul className="grid grid-cols-2 gap-y-3 text-gray-300 list-disc list-inside">
              {tech.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Bloc Gestion de projet */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">
              Gestion de projet
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
