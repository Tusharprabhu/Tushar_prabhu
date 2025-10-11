import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTS } from "../constants";

export default function ProjectAbout() {
    const navigate = useNavigate();
    const { id } = useParams();

    const index = Number.isInteger(Number(id)) ? Number(id) : -1;
    const project = index >= 0 && index < PROJECTS.length ? PROJECTS[index] : null;

    useEffect(() => {
        if (project?.title) document.title = `${project.title} — Project`;
    }, [project]);

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-semibold">Project not found</h2>
                <p className="text-neutral-400 mt-2">The requested project does not exist.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200"
                >
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="w-full bg-black min-h-screen text-neutral-200">
            <div className="container max-w-5xl mx-auto px-4 py-10">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200"
                >
                    ← Back
                </button>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full md:w-72 h-48 md:h-48 object-cover rounded-xl border border-neutral-700"
                        />
                    ) : (
                        <div className="w-full md:w-72 h-48 bg-neutral-800 rounded-xl border border-neutral-700" />
                    )}

                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-semibold">{project.title}</h1>
                        {project.subtitle && (
                            <p className="text-neutral-400 mt-1">{project.subtitle}</p>
                        )}

                        <p className="mt-4 text-neutral-300 leading-relaxed">{project.description}</p>

                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/30"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>

                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 px-2 py-1 rounded-full text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}