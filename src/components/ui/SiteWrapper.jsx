import { cn } from "@/lib/cn";
export function SiteWrapper({ children, className, as: Tag = "div", id }) {
  return (
    <Tag id={id} className={cn("wrap", className)}>
      {children}
    </Tag>
  );
}
