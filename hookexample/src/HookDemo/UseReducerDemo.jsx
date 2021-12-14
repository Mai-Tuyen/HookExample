import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return action.payload + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error();
  }
};
const UseReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const handleIncrease = () => {
    var obj = {
      type: "INCREMENT",
      payload: 3,
    };

    dispatch(obj);
  };
  return (
    <div style={{ marginTop: 100 }}>
      Counter: {count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
    </div>
  );
};

export default UseReducerDemo;
