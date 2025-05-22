import React from "react";

export default function Experience() {
  const roles = [
    {
      poste: "Project Manager Officer",
      entreprise: "Inetum",
      periode: "09/2024 – 08/2025",
      missions: [
        "Déploiement d’un portail régional de pilotage de projets",
        "Refonte d’une application Power Apps pour la gestion documentaire",
        "Automatisation des processus internes avec Power Automate",
        "Création de tableaux de bord budgétaires avec Power BI",
      ],
    },
    {
      poste: "Assistante projets & outils numériques",
      entreprise: "Animafac",
      periode: "10/2023 – 08/2024",
      missions: [
        "Recueil et analyse des besoins utilisateurs",
        "Gestion de projets CRM & Web",
        "Support IT et rédaction de documentation",
      ],
    },
    {
      poste: "Consultante Big data et EPM",
      entreprise: "KPS Consulting",
      periode: "06/2023 – 09/2023",
      missions: [
        "Implémentation d'une solution de reporting via MS BI et Talend",
        "Développement d'une solution de pilotage de la performance",
      ],
    },
    // ... autres expériences
  ];

  return (
    <section id="experience" className="bg-[#121212] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Expériences</h2>
        <div className="space-y-10">
          {roles.map((r, i) => (
            <div
              key={i}
              className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{r.poste}</h3>
                  <p className="text-[#4f46e5]">{r.entreprise}</p>
                </div>
                <span className="text-gray-400 mt-2 sm:mt-0">{r.periode}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {r.missions.map((m, j) => (
                  <li key={j}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
