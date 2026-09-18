export async function fetchGithubRepos(username) {
  const cacheKey = `github-repos:${username}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}`);
  }
  const payload = await response.json();
  const repos = payload.filter((repo) => !repo.fork);
  writeCache(cacheKey, repos);
  return repos;
}
const TTL_MS = 30 * 60 * 1000;
function readCache(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.at > TTL_MS) return null;
    return parsed.repos;
  } catch {
    return null;
  }
}
function writeCache(key, repos) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), repos }));
  } catch {}
}
