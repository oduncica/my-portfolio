import React from "react";
import ProjectCard from "../components/ProjectCard";

const professional = [
  {
    title: "Portail régional de pilotage",
    description:
      "Conception et déploiement d’un portail de suivi projets avec Power Apps.",
    stack: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    title: "Dashboards budgétaires",
    description:
      "Création de tableaux de bord Power BI pour le suivi budgétaire.",
    stack: ["Power BI", "DAX"],
  },
  {
    title: "Application Power Apps",
    description:
      "Conception et déploiement d’un portail de suivi projets avec Power Apps.",
    stack: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    title: "Automatisation de processus",
    description:
      "Création de tableaux de bord Power BI pour le suivi budgétaire.",
    stack: ["Power Automate"],
  },
];

const academic = [
  {
    title: "Bookmate",
    description:
      "Application de recommandation de livres, interface inspirée de Tinder.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/oduncica/bookmate",
  },
  {
    title: "Dashboard Netvibes-like",
    description: "Microservices et intégration de diverses API.",
    stack: ["React", "APIs REST"],
    link: "https://github.com/oduncica/dashboard-app",
  },
  {
    title: "Documentaire interactif",
    description:
      "Application de recommandation de livres, interface inspirée de Tinder.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/oduncica/bookmate",
  },
  {
    title: "Ira Ifè",
    description: "Microservices et intégration de diverses API.",
    stack: ["React", "APIs REST"],
    link: "https://github.com/oduncica/dashboard-app",
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
