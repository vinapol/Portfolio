import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { Modal } from "@/components/ui/Modal";
import { ExternalLink } from "@/components/ui/Icons";
import { useI18n } from "@/i18n";
export function ProjectModal({ project, onClose }) {
  const { t } = useI18n();
  const points = [
    { key: "context", title: t.modal.context, field: "context" },
    { key: "objectives", title: t.modal.objectives, field: "objectives" },
    { key: "stack", title: t.modal.stack, field: "stack" },
    { key: "skills", title: t.modal.skills, field: "skills" },
    { key: "results", title: t.modal.results, field: "results" },
  ];
  return (
    <Modal
      open={Boolean(project)}
      title={project?.title ?? ""}
      onClose={onClose}
    >
      {project ? (
        <div className="study">
          <dl className="study__meta">
            <Meta label={t.modal.architecture} value={project.architecture} />
            <Meta label={t.modal.performance} value={project.perf} />
            <Meta label={t.modal.tests} value={project.tests} />
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
                {t.modal.repo}
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
                {t.modal.demo}
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
