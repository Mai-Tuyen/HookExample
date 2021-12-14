import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffectDemo = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div style={{ fontSize: 500 }}>{count}</div>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default UseLayoutEffectDemo;
