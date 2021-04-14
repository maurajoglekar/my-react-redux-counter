import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./actions";

function Counter({ value, incrementAction, decrementAction }) {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrementAction}>-</button>
        <span>{value}</span>
        <button onClick={incrementAction}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.value
});

// This component connects to the redux store
// the redux's connect passes in the dispatch function
// in the props
const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(increment()),
  decrementAction: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
