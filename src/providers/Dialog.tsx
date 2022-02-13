import React, { createContext, ReactNode, useContext, useState } from "react";
import { useLockBodyScroll } from "../hooks/useBodyScroll";
import { PortalConsumer } from "./Portal";

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

  const openDialog = ({ node }: { node: ReactNode }) => {
    setIsOpen(true);
    setNode(node);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setNode(null);
  };

  return (
    <DialogContext.Provider
      value={{
        open: isOpen,
        openDialog,
        closeDialog,
      }}
    >
      {children}
      {isOpen ? <PortalConsumer>{node}</PortalConsumer> : null}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);
  return context;
}
