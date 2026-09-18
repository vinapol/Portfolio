import { GithubProjectsContext } from "@/context/github-projects-context";
import { fallbackProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { loadGithubProjects } from "@/lib/load-projects";
import { useEffect, useMemo, useState } from "react";
export function GithubProjectsProvider({ children }) {
  const [projects, setProjects] = useState(fallbackProjects);
  const [status, setStatus] = useState("ready");
  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let idleId;

    const sync = () => {
      loadGithubProjects(profile.githubHandle)
        .then((next) => {
          if (cancelled) return;
          setProjects(next);
          setStatus("ready");
        })
        .catch(() => {
          if (cancelled) return;
          setProjects(fallbackProjects);
          setStatus("error");
        });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(sync, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(sync, 1);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  const value = useMemo(() => ({ projects, status }), [projects, status]);
  return (
    <GithubProjectsContext.Provider value={value}>
      {children}
    </GithubProjectsContext.Provider>
  );
}
