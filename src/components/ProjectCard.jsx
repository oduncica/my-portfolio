import React from "react";

export default function ProjectCard({ title, description, stack, link }) {
  return (
    <div className="bg-[#1a1a1a] text-white border border-[#2e2e2e] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

      <p className="mb-4 text-sm text-gray-300">
        <span className="font-semibold text-gray-400">Technos : </span>
        <span>{stack.join(", ")}</span>
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#4f46e5] border border-[#4f46e5] px-4 py-2 rounded-md hover:bg-[#4f46e5] hover:text-white transition"
        >
          Voir le projet
        </a>
      )}
    </div>
  );
}
