import { cn } from "@/lib/cn";
export function Button({
  variant = "secondary",
  className,
  children,
  ...props
}) {
  return (
    <button className={cn("btn", `btn--${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
export function ButtonLink({
  variant = "secondary",
  className,
  children,
  ...props
}) {
  return (
    <a className={cn("btn", `btn--${variant}`, className)} {...props}>
      {children}
    </a>
  );
}
