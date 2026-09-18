import { Chip } from "@/components/ui/Chip";
import { ProjectSchematic } from "@/components/ui/ProjectSchematic";
import { ArrowRight } from "@/components/ui/Icons";
import { useState } from "react";
export function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <ProjectCover project={project} />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__tag">{project.tag}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <ul className="project-card__stack">
          {project.stack.map((item) => (
            <li key={item}>
              <Chip>{item}</Chip>
            </li>
          ))}
        </ul>
        <div className="project-card__footer">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="project-card__inspect"
          >
            Voir le détail
            <ArrowRight className="icon icon--12" aria-hidden="true" />
          </button>
          <span className="project-card__links">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__github"
              >
                GitHub
              </a>
            ) : null}
            <span className="project-card__year">{project.year}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
function ProjectCover({ project }) {
  const [broken, setBroken] = useState(false);
  if (!project.cover || broken) {
    return <ProjectSchematic kind={project.schematic} />;
  }
  return (
    <div className="project-card__cover">
      <img
        src={project.cover}
        alt=""
        width={640}
        height={360}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 92vw"
        className="project-card__cover-img"
        loading="lazy"
        decoding="async"
        onError={() => setBroken(true)}
      />
    </div>
  );
}
