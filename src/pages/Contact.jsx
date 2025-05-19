import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d0d0d] text-white py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contactez-moi</h2>

        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="w-full bg-[#1a1a1a] text-white border border-[#333] px-4 py-3 rounded-md focus:outline-none focus:border-[#4f46e5]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-[#1a1a1a] text-white border border-[#333] px-4 py-3 rounded-md focus:outline-none focus:border-[#4f46e5]"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            required
            className="w-full bg-[#1a1a1a] text-white border border-[#333] px-4 py-3 rounded-md focus:outline-none focus:border-[#4f46e5]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#4f46e5] hover:bg-[#6366f1] text-white font-semibold py-3 rounded-md transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
