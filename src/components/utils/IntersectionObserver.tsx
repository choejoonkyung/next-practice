import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface InterSectionObserveProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  cb: () => void;
  options?: IntersectionOptions;
}

function InterSectionObserve({
  children,
  cb,
  options = {
    threshold: 0.3,
    triggerOnce: true,
  },
}: InterSectionObserveProps) {
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      cb();
    }
  }, [inView, cb]);

  return React.cloneElement(children, {
    ref,
  });
}

export default InterSectionObserve;
