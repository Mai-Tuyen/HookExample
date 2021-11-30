import { memo, useState,useEffect, useRef} from "react";

const ComponentCon = ({onIncrease}) => {
  const countReRender = useRef(0);
  useEffect(() => {
    countReRender.current = countReRender.current + 1;
  });

  console.log("Vừa re-render lại component con lần thứ", countReRender);
  return (
    <>
    <button onClick={onIncrease}>Tăng</button>
      {" "}
      <h2>Vừa re-render lại component con lần thứ {countReRender.current}</h2>{" "}
    </>
  );
};

export default memo(ComponentCon);
