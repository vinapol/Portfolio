import { useCallback, useMemo, useRef, useState } from "react";
import { Check } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { ToastContext } from "@/context/toast-context";
export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef(undefined);
  const notify = useCallback((next) => {
    setMessage(next);
    setVisible(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setVisible(false), 3000);
  }, []);
  const value = useMemo(() => ({ notify }), [notify]);
  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cn("toast", !visible && "is-hidden")}
      >
        <Check className="icon icon--14" aria-hidden="true" />
        {message}
      </div>
    </ToastContext.Provider>
  );
}
