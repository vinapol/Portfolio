import {
  detailsToProject,
  fallbackProject,
  fallbackProjects,
  projectDetails,
} from "@/data/projects";
import { fetchGithubRepos } from "@/lib/github";
export async function loadGithubProjects(username) {
  const repos = await fetchGithubRepos(username);
  return repos.map((repo) => {
    const year = new Date(repo.pushed_at || repo.created_at)
      .getFullYear()
      .toString();
    const details = projectDetails[repo.name];
    const homepage = repo.homepage?.trim();
    if (details) {
      const project = detailsToProject(repo.name, details, repo.html_url, year);
      if (homepage) {
        project.links.demo = homepage;
      }
      return project;
    }
    return fallbackProject(
      repo.name,
      repo.html_url,
      repo.language,
      repo.description,
      year,
    );
  });
}
export { fallbackProjects };
