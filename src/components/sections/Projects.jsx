import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { FilterBar } from "@/components/ui/FilterBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteWrapper } from "@/components/ui/SiteWrapper";
import { useGithubProjects } from "@/context/github-projects-context";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n";
import { localizeProject } from "@/lib/locale";
import { useCallback, useMemo, useState } from "react";
export function Projects() {
  const { t, lang } = useI18n();
  const { projects, status } = useGithubProjects();
  const localized = useMemo(
    () => projects.map((project) => localizeProject(project, lang)),
    [projects, lang],
  );
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const visible = useMemo(
    () =>
      filter === "all"
        ? localized
        : localized.filter((project) => project.category === filter),
    [filter, localized],
  );
  const formationCount = localized.filter(
    (p) => p.category === "formation",
  ).length;
  const personnelCount = localized.filter(
    (p) => p.category === "personnel",
  ).length;
  const options = [
    { id: "all", label: `${t.filterAll} (${localized.length})` },
    { id: "formation", label: `${t.filterTraining} (${formationCount})` },
    { id: "personnel", label: `${t.filterPersonal} (${personnelCount})` },
  ];
  return (
    <section id="projets" aria-labelledby="projets-title" className="projects">
      <SiteWrapper>
        <div className="text-frame projects__intro">
          <SectionHeader
            id="projets-title"
            title={t.projectsTitle}
            actions={
              <FilterBar
                label={t.filterLabel}
                options={options}
                value={filter}
                onChange={setFilter}
              />
            }
          />
          <p className="projects__sync">
            {t.syncLead}{" "}
            <a
              href={`https://github.com/${profile.githubHandle}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{profile.githubHandle}
            </a>
            {status === "loading" ? t.loading : null}
            {status === "error" ? t.syncError : null}
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
