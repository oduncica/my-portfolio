import React from "react";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Photo de profil"
            className="w-48 rounded-full object-cover aspect-square border-4 border-[#4f46e5] shadow-lg"
          />
        </div>
        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Étudiante en Master Cultures et Métiers du web à l'Université
            Gustave Eiffel, je suis passionnée par les technologies IT et la
            transformation numérique.
          </p>
          {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-400 list-disc list-inside">
            <li>Power Apps, Power BI, Power Automate</li>
            <li>React, Node.js, Express, HTML/CSS, JavaScript</li>
            <li>Méthodologies agiles (Scrum, Kanban)</li>
            <li>Anglais (C1) / Français (C2)</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
