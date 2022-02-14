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
  token?: string;
}

interface GlobalState {
  theme: "light" | "dark";
  id: string;
  user: string | null;
}

const initializer = (token?: string): GlobalState => ({
  theme: "dark",
  id: "null",
  user: token ?? null,
});

const generateActions = (
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

type GlobalStateActions = typeof generateActions extends (
  ...args: any[]
) => infer R
  ? R
  : never;

interface GlobalStateContextValue {
  state: GlobalState;
  actions: GlobalStateActions;
}

export const GlobalStateContext = createContext<GlobalStateContextValue>({
  state: initializer(),
  actions: {} as GlobalStateActions,
});

export const GlobalStateProvider = ({ children, token }: GlobalStateProps) => {
  const [state, setState] = useState<GlobalState>(() => initializer(token));
  const update = (recipe: (draft: GlobalState) => void) =>
    setState((prev) => produce(prev, recipe));
  const actions = generateActions(update);

  const value = useMemo((): GlobalStateContextValue => {
    return { state, actions };
  }, [state]);

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export function useGlobalState() {
  return useContext(GlobalStateContext);
}
