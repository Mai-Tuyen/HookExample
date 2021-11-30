import { useState, useEffect, useRef } from "react";
const UseRefDemo = () => {
  const inputRef = useRef();
  return (
    <>
    <br/>
      <input ref={inputRef}/><br/>
      <button onClick={() => inputRef?.current.focus()}>Focus vào input</button>
    </>
  );
};

export default UseRefDemo;
