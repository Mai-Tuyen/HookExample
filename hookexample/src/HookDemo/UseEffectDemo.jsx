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
  console.log("Đây là bước render UI nè !!!!!");
  return (
    <div style={{marginLeft: 100, marginTop: 100}}>
      <input onChange={(e) => handleChangeInput(e)} />
      <div style={{fontSize: 50}}>{name}</div>
    </div>
  );
};
export default UseEffectDemo;
