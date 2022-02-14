import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const portalEle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    portalEle.current = document.createElement("div");
    portalEle.current.id = "portal";
    document.body.appendChild(portalEle.current);
    return () => {
      if (portalEle.current != null) {
        document.body.removeChild(portalEle.current);
      }
    };
  }, []);

  if (!mounted || portalEle.current == null) {
    return null;
  }

  return createPortal(children, portalEle.current);
}
