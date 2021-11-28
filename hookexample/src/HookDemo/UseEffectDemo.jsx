import { useState, useEffect } from "react";
const UseEffectDemo = () => {
  const [name, setName] = useState();

  useEffect(() => {
    console.log("Vừa vào hàm callback của useEffect với name =",name);
    return () => {
        console.log("Vừa vào hàm cleanup function của useEffect với name = ",name);
    }
  },[name]);
  const handleChangeInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{marginLeft: 100, marginTop: 100}}>
      <input onChange={(e) => handleChangeInput(e)} />
    </div>
  );
};
export default UseEffectDemo;
