export const combineReducers = (reducers: Record<string, any>) => {
  const nextState: Record<string, any> = {};
  const reducerFunctions: Record<string, any> = {};
  const reducersKeys: Array<string> = Object.keys(reducers);

  reducersKeys.forEach((reducerKey: string) => {
    if (typeof reducers[reducerKey] === "function") {
      reducerFunctions[reducerKey] = reducers[reducerKey];
    }
  });

  const reducerFunctionsKeys = Object.keys(reducerFunctions);

  return (state: Record<string, any> = {}, action: any) => {
    reducerFunctionsKeys.forEach((reducerKey: string) => {
      const reducer: (state: any, action: any) => any =
        reducerFunctions[reducerKey];
      nextState[reducerKey] = reducer(state[reducerKey], action);
    });

    return nextState;
  };
};
