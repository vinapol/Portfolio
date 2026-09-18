import { GithubProjectsProvider } from "@/context/GithubProjects";
import { Contact } from "@/components/sections/Contact";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";

export default function BelowFold() {
  return (
    <GithubProjectsProvider>
      <Projects />
      <Philosophy />
      <Contact />
    </GithubProjectsProvider>
  );
}
