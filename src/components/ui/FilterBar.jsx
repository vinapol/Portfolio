import { cn } from "@/lib/cn";
export function FilterBar({ options, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="filter-bar">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
          className={cn("filter-bar__btn", value === option.id && "is-active")}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
