import { useState } from "react";
const USeStateDemo = () => {
  const [count1, setCount1] = useState({ a: { b: 1, c: 0, d: 3 }, e: "tuyến" });
  const handleCount1 = () => {
    setCount1({ ...count1, a: { ...count1.a, c: count1.a.c + 1 } });
    setCount1({ ...count1, a: { ...count1.a, c: count1.a.c + 1 } });
    setCount1({ ...count1, a: { ...count1.a, c: count1.a.c + 1 } });

    // setCount1((prevState) => {
    //   return prevState + 1;
    // });
    // setCount1(prevState => prevState +1)
    // setCount1(prevState => prevState + 1)
    checkChanLe();
  };

  const checkChanLe = () => {
    count1 % 2 == 0
      ? console.log("Count1 là số chẵn")
      : console.log("Count1 là số lẻ");
  };

  console.log("Vừa render lại component !!!!!!");
  return (
    <div style={{ margin: "auto" }}>
      <h1>{JSON.stringify(count1)}</h1>
      <button onClick={handleCount1}> + </button>
    </div>
  );
};

export default USeStateDemo;
