import React from "react";
import { decrementAction, incrementAction } from "./counterStore";
import { Redux } from "./state-manager/dist";

const Connect = Redux.connect;

interface Props {
  value: string;
  incr: () => void;
  decr: () => void;
}

const Counter = ({ value, incr, decr }: Props) => {
  return (
    <div>
      <p>
        <b>{value}</b>
      </p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    value: state.counterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  incr: () => dispatch(incrementAction()),
  decr: () => dispatch(decrementAction()),
});

export default Connect(mapStateToProps, mapDispatchToProps)(Counter);
