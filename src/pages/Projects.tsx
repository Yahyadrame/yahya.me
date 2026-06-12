"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Projets Vedettes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            Une collection de mes travaux les plus marquants, des applications web aux expériences créatives.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-brand-caribbean text-brand-deep border-brand-caribbean neon-glow"
                : "text-zinc-500 border-white/10 hover:border-brand-caribbean/30 hover:text-white"
            )}
          >
            Tous
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-brand-caribbean text-brand-deep border-brand-caribbean neon-glow"
                  : "text-zinc-500 border-white/10 hover:border-brand-caribbean/30 hover:text-white"
            )}
          >
            {cat}
          </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl p-4 glass border-white/5 hover:border-brand-caribbean/30 hover:bg-brand-deep/40 transition-all duration-500 text-left flex flex-col h-full group hover:scale-[1.02] hover:neon-glow"
            >
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-caribbean transition-colors">{project.name}</h3>
              <p className="text-base text-zinc-400 mb-6 flex-grow leading-relaxed">
                {project.description || "Construction du futur des expériences numériques."}
              </p>
              <div className="flex flex-wrap gap-1 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-brand-bangladesh/20 border border-brand-caribbean/20 px-3 py-1 rounded-lg text-brand-mint font-semibold tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors font-bold"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-brand-caribbean hover:text-brand-meadow transition-colors uppercase tracking-widest"
                  >
                    Démo Live →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white font-black text-base transition-all duration-300 hover:bg-white/5 hover:border-white/30 flex items-center gap-2 group"
            >
              Voir plus de projets
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
