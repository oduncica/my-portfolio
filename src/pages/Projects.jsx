import React from "react";
import ProjectCard from "../components/ProjectCard";

const professional = [
  {
    title: "Portail régional de pilotage",
    description:
      "Conception et déploiement d’un portail de suivi projets avec Power Apps.",
    stack: ["Power Apps", "SharePoint"],
  },
  {
    title: "Tableaux de bord budgétaires Power BI",
    description:
      "Conception et automatisation de tableaux de bord interactifs pour le pilotage budgétaire. Intégration de sources de données multiples et modélisation avec DAX pour fournir des indicateurs de performance clairs et actualisés en temps réel.",
    stack: ["Power BI", "DAX", "Excel"],
  },
  {
    title: "Application Power Apps",
    description:
      "Refonte d'une application de gestion de documents de pilotage projets avec Power Apps.",
    stack: ["Power Apps", "SharePoint"],
  },
  {
    title: "Automatisation de processus",
    description: "Automatisation de processus RH internes avec Power Automate.",
    stack: ["Power Automate"],
  },
];

const academic = [
  {
    title: "Bookmate",
    description:
      "Application web de recommandation de livres avec interface de type swipe (Tinder-like), développée en React/Node. Stockage des données utilisateurs en base MongoDB, gestion des préférences via Express.",

    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/oduncica/bookmate",
  },
  {
    title: "Dashboard Netvibes-like",
    description: "Microservices et intégration de diverses API.",
    stack: ["React", "APIs REST"],
  },
  {
    title: "Documentaire interactif",
    description:
      "Site web de type documentaire interactifsur la culture réglémentaire dans l'éducation coréenne.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/oduncica/documentaire-interactif",
  },
  {
    title: "Ira Ifè",
    description: "Microservices et intégration de diverses API.",
    stack: ["React Native", "Express js", "Mongo db", "APIs REST"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d0d0d] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Mes projets</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#4f46e5] border-b border-[#2e2e2e] pb-2">
            Projets professionnels
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {professional.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#4f46e5] border-b border-[#2e2e2e] pb-2">
            Projets académiques & personnels
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {academic.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
