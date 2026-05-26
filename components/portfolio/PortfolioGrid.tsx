"use client";

import { useState } from "react";
import { categories, type Project, type CategoryFilter } from "@/lib/portfolio";
import ProjectCard from "./ProjectCard";

/** Griglia portfolio con filtro per categoria (client). Riceve i progetti
 *  serializzati dal Server Component. */
export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<CategoryFilter>("Tutti");
  const filtered = active === "Tutti" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                on
                  ? "border-lime/50 bg-lime/10 text-lime"
                  : "border-border bg-surface text-text-dim hover:border-lime/30 hover:text-text"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
