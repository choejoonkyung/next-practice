import { ReactNode } from "react";
import { useLockBodyScroll } from "../../../../hooks/useBodyScroll";
import { PortalConsumer } from "../../../../providers/Portal";

interface Props {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const TestDialog = ({ open, onClose, children }: Props) => {
  useLockBodyScroll(open);

  return (
    <PortalConsumer>
      {open ? (
        <section role="dialog" aria-modal={open}>
          {children}
          <button onClick={onClose}>닫기</button>
        </section>
      ) : null}
    </PortalConsumer>
  );
};
