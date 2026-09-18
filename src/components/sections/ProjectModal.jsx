import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { Modal } from "@/components/ui/Modal";
import { ExternalLink } from "@/components/ui/Icons";
const points = [
  { key: "context", title: "1. Contexte", field: "context" },
  { key: "objectives", title: "2. Objectifs", field: "objectives" },
  { key: "stack", title: "3. Stack technique", field: "stack" },
  { key: "skills", title: "4. Compétences développées", field: "skills" },
  { key: "results", title: "5. Résultats & impact", field: "results" },
];
export function ProjectModal({ project, onClose }) {
  return (
    <Modal
      open={Boolean(project)}
      title={project?.title ?? ""}
      onClose={onClose}
    >
      {project ? (
        <div className="study">
          <dl className="study__meta">
            <Meta label="Architecture" value={project.architecture} />
            <Meta label="Performance" value={project.perf} />
            <Meta label="Couverture tests" value={project.tests} />
          </dl>

          {points.map((point) => {
            const value = project[point.field];
            return (
              <section key={point.key}>
                <h3 className="study__heading">{point.title}</h3>
                {typeof value === "string" ? (
                  <p className="study__text">{value}</p>
                ) : (
                  <ul className="study__list">
                    {value.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

          <div className="study__actions">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="study__action"
              >
                <GitHubIcon className="icon icon--16" />
                Dépôt GitHub
              </a>
            ) : null}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="study__action"
              >
                <ExternalLink className="icon icon--16" aria-hidden="true" />
                Démo live
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
function Meta({ label, value }) {
  return (
    <div className="study__meta-item">
      <dt className="study__meta-label">{label}</dt>
      <dd className="study__meta-value">{value}</dd>
    </div>
  );
}
