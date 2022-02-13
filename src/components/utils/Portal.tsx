import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    elementRef.current = document.createElement("div");
    document.body.appendChild(elementRef.current);
    return () => {
      if (elementRef.current != null) {
        document.body.removeChild(elementRef.current);
      }
    };
  }, []);

  if (!mounted || elementRef.current == null) {
    return null;
  }

  return createPortal(<div>{children}</div>, elementRef.current);
}
