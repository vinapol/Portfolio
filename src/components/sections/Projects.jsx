import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { FilterBar } from "@/components/ui/FilterBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { useGithubProjects } from "@/context/github-projects-context";
import { profile } from "@/data/profile";
import { useCallback, useMemo, useState } from "react";
export function Projects() {
  const { projects, status } = useGithubProjects();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );
  const formationCount = projects.filter(
    (p) => p.category === "formation",
  ).length;
  const personnelCount = projects.filter(
    (p) => p.category === "personnel",
  ).length;
  const options = [
    { id: "all", label: `Tous (${projects.length})` },
    { id: "formation", label: `Formation (${formationCount})` },
    { id: "personnel", label: `Personnels (${personnelCount})` },
  ];
  return (
    <section id="projets" aria-labelledby="projets-title" className="projects">
      <SiteWrapper>
        <div className="text-frame projects__intro">
          <SectionHeader
            id="projets-title"
            title="Projets & Études de Cas"
            actions={
              <FilterBar
                label="Filtrer les projets"
                options={options}
                value={filter}
                onChange={setFilter}
              />
            }
          />
          <p className="projects__sync">
            Liste synchronisée avec{" "}
            <a
              href={`https://github.com/${profile.githubHandle}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{profile.githubHandle}
            </a>
            {status === "loading" ? " — chargement…" : null}
            {status === "error"
              ? " — GitHub indisponible, affichage du catalogue local."
              : null}
          </p>
        </div>
        {status === "loading" ? (
          <div className="projects__grid" aria-busy="true">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="projects__skeleton" />
            ))}
          </div>
        ) : (
          <div className="projects__grid">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelected}
              />
            ))}
          </div>
        )}
      </SiteWrapper>
      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}
