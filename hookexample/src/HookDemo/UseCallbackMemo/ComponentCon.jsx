import { memo, useState, useEffect, useRef } from "react";

const ComponentCon = ({ onIncrease }) => {
  const countReRender = useRef(0);
  useEffect(() => {
    countReRender.current = countReRender.current + 1;
  });

  console.log("Vừa re-render lại component con lần thứ", countReRender);
  return (
    <>
      <button onClick={onIncrease}>Tăng</button>{" "}
      <h2>Vừa re-render lại component con lần thứ {countReRender.current}</h2>{" "}
    </>
  );
};

export default memo(ComponentCon);
// export default memo(ComponentCon, (prevProp, nextProp) => {
//   console.log(
//     "aaaaaaaaaaaaaaaaaaaa",
//     prevProp.onIncrease == nextProp.onIncrease
//   );
// });

// import React, { PureComponent, Component } from "react";
// export default class ComponentCon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//     return null;
//   }
// }
