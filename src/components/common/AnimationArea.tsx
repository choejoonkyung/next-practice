import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import InterSectionObserve from "../utils/IntersectionObserver";

interface AnimationAreaProps {
  children: ReactNode;
  duration: number;
  distance: number;
}

function AnimationArea({ children, duration, distance }: AnimationAreaProps) {
  const [trigger, setTrigger] = useState(false);

  return (
    <InterSectionObserve
      cb={() => {
        setTrigger(true);
      }}
    >
      <Animation duration={duration} distance={distance} trigger={trigger}>
        {children}
      </Animation>
    </InterSectionObserve>
  );
}

interface AnimationProps extends AnimationAreaProps {
  trigger: boolean;
}

const Animation = styled.div(
  ({ trigger, distance, duration }: AnimationProps) => `
  background: black;
  transition: transform ${duration}ms ease 0s, opacity ${duration}ms ease 0s;
  opacity: ${trigger ? 1 : 0};
  transform: translate3d(0px, ${trigger ? 0 : distance}px, 0px);
`
);

export default AnimationArea;
