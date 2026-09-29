import React from "react";

export default function ProjectDetail({ project, close }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center px-6 z-50">
      <div className="max-w-3xl w-full bg-black border border-green-600 rounded-2xl p-6">
        <img
          src={project.image}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          {project.title}
        </h2>

        <p className="text-white/80 mb-6">{project.desc}</p>

        <button
          onClick={close}
          className="px-6 py-2 bg-green-500 text-black rounded-full font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
