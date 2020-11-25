import React, { ReactElement } from "react";

export const ReduxContext = React.createContext({});

const ContextProvider = ReduxContext.Provider;

interface ProviderProps {
  store: {
    getState: () => any;
    dispatch: (action: any) => void;
    subscribe: (listener: any) => void;
  };
  children: ReactElement;
}

export const Provider = ({ store, children }: ProviderProps): ReactElement => {
  return <ContextProvider value={store}>{children}</ContextProvider>;
};
