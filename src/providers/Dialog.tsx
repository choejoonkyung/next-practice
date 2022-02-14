import styled from "@emotion/styled";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Portal } from "../components/utils/Portal";
import { useLockBodyScroll } from "../hooks/useBodyScroll";

interface DialogContextProps {
  children: ReactNode;
}

interface DialogContextValue {
  open: boolean;
  openDialog: ({ node }: { node: ReactNode }) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextValue>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
});

export function DialogProvider({ children }: DialogContextProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState<ReactNode>(null);
  useLockBodyScroll(isOpen);

  const openDialog = useCallback(({ node }: { node: ReactNode }) => {
    setNode(node);
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setNode(null);
    setIsOpen(false);
  }, []);

  const value = useMemo((): DialogContextValue => {
    return {
      open: isOpen,
      openDialog,
      closeDialog,
    };
  }, [isOpen]);

  return (
    <DialogContext.Provider value={value}>
      {children}
      {isOpen ? (
        <Portal>
          <DialogBackground>{node}</DialogBackground>
        </Portal>
      ) : null}
    </DialogContext.Provider>
  );
}

const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export function useDialog() {
  const context = useContext(DialogContext);
  return context;
}
