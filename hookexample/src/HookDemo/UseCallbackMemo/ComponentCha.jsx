import { useState, useEffect, memo, useCallback } from "react";
import ComponentCon from "./ComponentCon";
const ComponentCha = () => {
  const [count, setCount] = useState(0);
  console.log(typeof count);
  // const handleIncrease = () => {
  //   // đây là 1 biến kiểu tham chiếu, khi component re-render sẽ tạo 1 tham chiếu khác (object, array, function)
  //   setCount(count + 1);
  // };

  const handleIncrease = useCallback(() => {
    // lưu lại 1 tham chiếu ra ngoài phạm vi component, nếu deps là [] hoặc không thay đổi thì lần re-render tiếp theo vẫn trả về tham chiếu trước đó.
    // setCount(count + 1); // --> viết như này trong useCallback nó ko chạy đâu, mỗi tham chiếu của 1 function chỉ nhận dc 1 giá trị của state lúc khởi tạo phạm vi thôi  (bất kể cả state là value type hay reference type)
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "100px 100px" }}>
      <h1>{count}</h1>
      {/* <button onClick={handleIncrease}>Tăng</button>
      <ComponentCon /> */}
      <ComponentCon onIncrease={handleIncrease} />
    </div>
  );
};

export default ComponentCha;
