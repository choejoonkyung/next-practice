import produce from "immer";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface GlobalStateProps {
  children: ReactNode;
}

interface GlobalState {
  theme: "light" | "dark";
  id: string;
}

const initializer = (): GlobalState => ({
  theme: "dark",
  id: "null",
});

const generateAction = (
  update: (recipe: (draft: GlobalState) => void) => void
) => {
  const toLightTheme = useCallback(() => {
    update((draft) => {
      draft.theme = "light";
    });
  }, []);

  return {
    toLightTheme,
  };
};

interface GlobalStateContext {
  state: GlobalState;
  actions?: typeof generateAction extends (...args: any[]) => infer R
    ? R
    : never;
}

export const GlobalState = createContext<GlobalStateContext>({
  state: initializer(),
});

export function GlobalStateProvider({ children }: GlobalStateProps) {
  const [state, setState] = useState<GlobalStateContext["state"]>(initializer);
  const update = (recipe: (draft: GlobalState) => void) =>
    setState((prev) => produce(prev, recipe));
  const actions = generateAction(update);

  const value = useMemo((): GlobalStateContext => {
    return { state, actions };
  }, [state]);

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
}

export function useGlobalState() {
  return useContext(GlobalState);
}
