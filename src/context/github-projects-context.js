import { createContext, useContext } from "react";
export const GithubProjectsContext = createContext(null);
export function useGithubProjects() {
  const ctx = useContext(GithubProjectsContext);
  if (!ctx) {
    throw new Error(
      "useGithubProjects must be used within GithubProjectsProvider",
    );
  }
  return ctx;
}
