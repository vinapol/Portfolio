import { cn } from "@/lib/cn";
export function Chip({ children, className }) {
  return <span className={cn("chip", className)}>{children}</span>;
}
