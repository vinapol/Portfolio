import { cn } from "@/lib/cn";
export function SectionHeader({ title, id, actions, bordered = true }) {
  return (
    <header
      className={cn("section-header", !bordered && "section-header--plain")}
    >
      <div>
        <h2 id={id} className="section-header__title">
          {title}
        </h2>
      </div>
      {actions}
    </header>
  );
}
