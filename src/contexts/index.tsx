import { createContext, ReactNode, useContext, useReducer } from "react";

declare interface stateLayoutReducer {
  isSidebarOpened: boolean;
  type?: string;
}

declare interface stateLayoutProvider {
  children: ReactNode;
}

var LayoutStateContext = createContext({
  isSidebarOpened: true,
});
var LayoutDispatchContext = createContext({});

export function LayoutReducer(state: stateLayoutReducer, action: any) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function LayoutProvider({ children }: stateLayoutProvider) {
  var [state, dispatch] = useReducer(LayoutReducer, { isSidebarOpened: true });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

export function UseLayoutState() {
  var context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

export function UseLayoutDispatch() {
  var context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export function ToggleSidebar(dispatch: any) {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
}
