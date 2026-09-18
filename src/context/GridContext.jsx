import { useEffect, useMemo, useState } from "react";
import { GridContext } from "@/context/grid-context";
export function GridProvider({ children }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("grid-visible", visible);
  }, [visible]);
  const value = useMemo(
    () => ({
      visible,
      toggle: () => setVisible((current) => !current),
    }),
    [visible],
  );
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}
