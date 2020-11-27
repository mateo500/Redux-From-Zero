export const createStore = (
  rootReducer: (
    state: any,
    action: { type: string }
  ) => any
) => {
  let state: any;
  const listeners: Array<(state: any) => void> = [];

  const getState = (): any => state;

  const dispatch = (action: any): void => {
    state = rootReducer(state, action);
    listeners.forEach((listener: (state: any) => void) => listener(state));
  };

  const subscribe = (listener: (state: any) => void): void => {
    listeners.push(listener);
  };
  
  
  //mandatory dispatch to populate the state tree
  dispatch({ type: "@@@INIT" });

  return { getState, dispatch, subscribe };
};
