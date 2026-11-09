const TEXT_KEYS = [
  "tag",
  "tagline",
  "stack",
  "context",
  "objectives",
  "skills",
  "results",
  "nextSteps",
  "architecture",
  "perf",
  "tests",
];

export function splitLocale(details, english) {
  const fr = {};
  for (const key of TEXT_KEYS) {
    if (key in details) fr[key] = details[key];
  }
  return { fr, en: english ?? {} };
}

export function localizeProject(project, lang) {
  if (!project?.locales) return project;
  const text =
    lang === "en"
      ? { ...project.locales.fr, ...project.locales.en }
      : project.locales.fr;
  return { ...project, ...text };
}
