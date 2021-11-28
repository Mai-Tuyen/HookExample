import { useState } from "react";
const USeStateDemo = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const handleCount1 = () => {
    // setCount1(count1 + 1)
    // setCount1(count1 + 1)
    // setCount1(count1 + 1)
    setCount1((prevState) => {
      return prevState + 1;
    });
    checkChanLe();
    // setCount1(prevState => prevState +1)
    // setCount1(prevState => prevState + 1)
  };

  const checkChanLe = () => {
    count1 % 2 == 0
      ? console.log("Count1 là số chẵn")
      : console.log("Count1 là số lẻ");
  };

  console.log("Vừa render lại component !!!!!!");
  return (
    <div style={{ margin: "auto" }}>
      <h1>
        {count1} | {count2}
      </h1>
      <button onClick={handleCount1}> + </button>
    </div>
  );
};

export default USeStateDemo;
