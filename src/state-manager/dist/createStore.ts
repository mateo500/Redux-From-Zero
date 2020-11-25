export const createStore = (
  rootReducer: (
    state: Record<string, any>,
    action: { type: string }
  ) => Record<string, any>
) => {
  let state: any;
  let listeners: Array<(state: any) => void> = [];

  const getState = (): any => state;

  const dispatch = (action: any): void => {
    state = rootReducer(state, action);
    listeners.forEach((listener: (state: any) => void) => listener(state));
  };

  const subscribe = (listener: (state: any) => void): void => {
    listeners.push(listener);
  };

  dispatch({type: '@@@INIT'});

  return { getState, dispatch, subscribe };
};
