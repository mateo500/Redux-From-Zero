import React from "react";
import { ReduxContext } from "./Provider";

export const connect = (
  mapStateToProps: Function,
  mapDispatchToProps: Function
) => (Component: any) => {
  class Connect extends React.Component<{
    store: {
      getState: () => any;
      dispatch: (action: any) => void;
      subscribe: (listener: (state: any) => void) => void;
    };
  }> {
    constructor(props: any) {
      super(props);
      this.state = props.store.getState();
    }

    componentDidMount() {
      this.props.store.subscribe((state: any) => {
        this.setState(state);
      });
    }

    render() {
      const { store } = this.props;

      return (
        <Component
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return (props: any) => (
    <ReduxContext.Consumer>
      {(store) => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  );
};
