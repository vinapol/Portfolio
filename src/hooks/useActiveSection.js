import { useEffect, useState } from "react";
export function useActiveSection(ids, offset = 96) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  useEffect(() => {
    if (ids.length === 0) return;
    const update = () => {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids, offset]);
  return activeId;
}
