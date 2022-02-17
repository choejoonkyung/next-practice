import { useEffect } from "react";

export function useLockBodyScroll(condition = false) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (condition) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [condition]);
}
