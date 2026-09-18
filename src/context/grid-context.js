import { createContext, useContext } from "react";
export const GridContext = createContext(null);
export function useGrid() {
  const ctx = useContext(GridContext);
  if (!ctx) throw new Error("useGrid must be used within GridProvider");
  return ctx;
}
