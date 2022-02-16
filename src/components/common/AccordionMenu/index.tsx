import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";

interface AccordionMenuItemProps {
  title: string;
  descNode: ReactNode;
}

export function AccordionMenuItem({ title, descNode }: AccordionMenuItemProps) {
  const [trigger, setTrigger] = useState(false);
  const [descAnimationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        setAnimationTrigger(true);
      }, 100);
      return;
    }
    setAnimationTrigger(false);
  }, [trigger]);

  return (
    <>
      <Menu onClick={() => setTrigger(!trigger)}>
        <h2>{title}</h2>
      </Menu>
      {trigger ? (
        <DescNodeWrraper trigger={descAnimationTrigger}>
          {descNode}
        </DescNodeWrraper>
      ) : null}
    </>
  );
}

const Menu = styled.div`
  cursor: pointer;
  margin-top: 40px;
  border-radius: 8px;
  padding: 12px;
  background-color: rgb(242, 244, 246);
  display: flex;
  h2 {
    font-size: 16px;
  }
`;

interface DescNodeWrraperProps {
  trigger: boolean;
  distance?: number;
}

const DescNodeWrraper = styled.div(
  ({ trigger, distance = 5 }: DescNodeWrraperProps) =>
    `
    margin-top: 10px;
    border-radius: 8px;
    padding: 12px;
    background-color: rgb(242, 244, 246);
    display: flex;
    transition: transform 200ms ease 0s;
    transform: translate3d(0px, ${trigger ? 0 : -distance}px, 0px);
    h2 {
      font-size: 16px;
    })
  `
);

interface AccordionMenuProps {
  menus: AccordionMenuItemProps[];
}

function AccordionMenu({ menus }: AccordionMenuProps) {
  return <div></div>;
}

export default AccordionMenu;
