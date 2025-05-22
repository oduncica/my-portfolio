import React from "react";
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] text-white text-center px-4">
      <p className="text-gray-400 text-lg mb-2">Hello, je suis</p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">Charlène Odunlami</h1>
      <h2 className="text-xl text-gray-400 mb-6">
        Consultante en transformation digitale & cheffe de projet AMOA
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* <a
          href="/CV_Charlene_Odunlami.pdf"
          className="border-2 border-[#4f46e5] text-[#4f46e5] px-6 py-2 rounded-lg hover:bg-[#4f46e5] hover:text-white transition"
        >
          Télécharger mon CV
        </a> */}
        <a
          href="#about"
          className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg hover:bg-[#6366f1] transition"
        >
          À propos de moi
        </a>
      </div>
    </section>
  );
}
